import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CloudinaryService } from '../media/cloudinary.service';
import { IsString, IsBoolean, IsOptional, IsArray } from 'class-validator';

export class CreateCreationDto {
  @IsString()              titre: string;
  @IsString()              description: string;
  @IsString()              prix: string;
  @IsString()              delai: string;
  @IsString()              categorieId: string;
  @IsArray() @IsOptional() tissus?: string[];
  @IsBoolean() @IsOptional() featured?: boolean;
  @IsBoolean() @IsOptional() nouveaute?: boolean;
  @IsBoolean() @IsOptional() publiee?: boolean;
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

@Injectable()
export class CreationsService {
  constructor(
    private prisma: PrismaService,
    private cloudinary: CloudinaryService,
  ) {}

  findAll(categorieSlug?: string) {
    return this.prisma.creation.findMany({
      where: {
        publiee: true,
        ...(categorieSlug ? { categorie: { slug: categorieSlug } } : {}),
      },
      include: { categorie: true, medias: { orderBy: { ordre: 'asc' } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  findFeatured() {
    return this.prisma.creation.findMany({
      where: { publiee: true, featured: true },
      include: { categorie: true, medias: { where: { estCouv: true } } },
      orderBy: { createdAt: 'desc' },
      take: 6,
    });
  }

  async findOne(slug: string) {
    const creation = await this.prisma.creation.findUnique({
      where: { slug },
      include: { categorie: true, medias: { orderBy: { ordre: 'asc' } } },
    });
    if (!creation) throw new NotFoundException('Création introuvable');
    await this.prisma.creation.update({ where: { slug }, data: { vues: { increment: 1 } } });
    return creation;
  }

  findAllAdmin() {
    return this.prisma.creation.findMany({
      include: { categorie: true, medias: { where: { estCouv: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(dto: CreateCreationDto) {
    const slug = slugify(dto.titre);
    return this.prisma.creation.create({
      data: { ...dto, slug, tissus: dto.tissus ?? [] },
      include: { categorie: true },
    });
  }

  async update(id: string, dto: Partial<CreateCreationDto>) {
    await this.prisma.creation.findUniqueOrThrow({ where: { id } });
    const data: Record<string, unknown> = { ...dto };
    if (dto.titre) data.slug = slugify(dto.titre);
    return this.prisma.creation.update({ where: { id }, data, include: { categorie: true, medias: true } });
  }

  async remove(id: string) {
    const creation = await this.prisma.creation.findUniqueOrThrow({
      where: { id }, include: { medias: true },
    });
    for (const m of creation.medias) {
      await this.cloudinary.deleteImage(m.publicId);
    }
    return this.prisma.creation.delete({ where: { id } });
  }

  async addMedia(creationId: string, buffer: Buffer, estCouv: boolean) {
    await this.prisma.creation.findUniqueOrThrow({ where: { id: creationId } });
    const { url, publicId } = await this.cloudinary.uploadBuffer(buffer, 'tailleur/creations');
    const count = await this.prisma.media.count({ where: { creationId } });
    return this.prisma.media.create({
      data: { url, publicId, creationId, estCouv: estCouv || count === 0, ordre: count },
    });
  }

  async removeMedia(mediaId: string) {
    const media = await this.prisma.media.findUniqueOrThrow({ where: { id: mediaId } });
    await this.cloudinary.deleteImage(media.publicId);
    return this.prisma.media.delete({ where: { id: mediaId } });
  }
}
