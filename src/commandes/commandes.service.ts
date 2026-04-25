import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { StatutCommande } from '@prisma/client';
import { IsString, IsOptional, IsEmail, IsDateString } from 'class-validator';

export class CreateCommandeDto {
  @IsString()              nom: string;
  @IsString()              telephone: string;
  @IsEmail() @IsOptional() email?: string;
  @IsString()              typeTenue: string;
  @IsString() @IsOptional() tissu?: string;
  @IsString() @IsOptional() mesures?: string;
  @IsDateString()          dateLivraison: string;
  @IsString() @IsOptional() message?: string;
}

@Injectable()
export class CommandesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateCommandeDto) {
    return this.prisma.commande.create({
      data: { ...dto, dateLivraison: new Date(dto.dateLivraison) },
    });
  }

  findAll(statut?: StatutCommande) {
    return this.prisma.commande.findMany({
      where: statut ? { statut } : undefined,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const cmd = await this.prisma.commande.findUnique({ where: { id } });
    if (!cmd) throw new NotFoundException('Commande introuvable');
    return cmd;
  }

  async updateStatut(id: string, statut: StatutCommande) {
    await this.prisma.commande.findUniqueOrThrow({ where: { id } });
    return this.prisma.commande.update({ where: { id }, data: { statut } });
  }

  stats() {
    return this.prisma.commande.groupBy({
      by: ['statut'],
      _count: { statut: true },
    });
  }
}
