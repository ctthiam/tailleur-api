import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IsString, IsOptional, IsInt } from 'class-validator';

export class CreateCategorieDto {
  @IsString() nom: string;
  @IsString() slug: string;
  @IsString() @IsOptional() emoji?: string;
  @IsInt()   @IsOptional() ordre?: number;
}

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.categorie.findMany({
      orderBy: { ordre: 'asc' },
      include: { _count: { select: { creations: { where: { publiee: true } } } } },
    });
  }

  async findOne(slug: string) {
    const cat = await this.prisma.categorie.findUnique({ where: { slug } });
    if (!cat) throw new NotFoundException('Catégorie introuvable');
    return cat;
  }

  create(dto: CreateCategorieDto) {
    return this.prisma.categorie.create({ data: dto });
  }

  async update(id: string, dto: Partial<CreateCategorieDto>) {
    await this.prisma.categorie.findUniqueOrThrow({ where: { id } });
    return this.prisma.categorie.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.prisma.categorie.findUniqueOrThrow({ where: { id } });
    return this.prisma.categorie.delete({ where: { id } });
  }
}
