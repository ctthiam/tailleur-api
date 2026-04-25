import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AvisService, CreateAvisDto } from './avis.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('avis')
export class AvisController {
  constructor(private service: AvisService) {}

  @Get()
  findPublies() {
    return this.service.findPublies();
  }

  @Post()
  create(@Body() dto: CreateAvisDto) {
    return this.service.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('admin/all')
  findAll() {
    return this.service.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id/publier')
  togglePublie(@Param('id') id: string) {
    return this.service.togglePublie(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
