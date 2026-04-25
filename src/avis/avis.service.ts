import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IsString, IsInt, IsOptional, Min, Max } from 'class-validator';

export class CreateAvisDto {
  @IsString()              nom: string;
  @IsString() @IsOptional() ville?: string;
  @IsInt() @Min(1) @Max(5) note: number;
  @IsString()              commentaire: string;
  @IsString() @IsOptional() tenue?: string;
}

@Injectable()
export class AvisService {
  constructor(private prisma: PrismaService) {}

  findPublies() {
    return this.prisma.avis.findMany({
      where: { publie: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  findAll() {
    return this.prisma.avis.findMany({ orderBy: { createdAt: 'desc' } });
  }

  create(dto: CreateAvisDto) {
    return this.prisma.avis.create({ data: dto });
  }

  async togglePublie(id: string) {
    const avis = await this.prisma.avis.findUnique({ where: { id } });
    if (!avis) throw new NotFoundException('Avis introuvable');
    return this.prisma.avis.update({ where: { id }, data: { publie: !avis.publie } });
  }

  async remove(id: string) {
    await this.prisma.avis.findUniqueOrThrow({ where: { id } });
    return this.prisma.avis.delete({ where: { id } });
  }
}
