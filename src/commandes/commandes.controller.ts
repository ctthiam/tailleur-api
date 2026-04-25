import { Controller, Get, Post, Put, Param, Body, Query, UseGuards } from '@nestjs/common';
import { CommandesService, CreateCommandeDto } from './commandes.service';
import { StatutCommande } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { IsEnum } from 'class-validator';

class UpdateStatutDto {
  @IsEnum(StatutCommande)
  statut: StatutCommande;
}

@Controller('commandes')
export class CommandesController {
  constructor(private service: CommandesService) {}

  /* Public : soumettre une commande */
  @Post()
  create(@Body() dto: CreateCommandeDto) {
    return this.service.create(dto);
  }

  /* Admin */
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query('statut') statut?: StatutCommande) {
    return this.service.findAll(statut);
  }

  @UseGuards(JwtAuthGuard)
  @Get('stats')
  stats() {
    return this.service.stats();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id/statut')
  updateStatut(@Param('id') id: string, @Body() dto: UpdateStatutDto) {
    return this.service.updateStatut(id, dto.statut);
  }
}
