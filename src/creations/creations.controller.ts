import {
  Controller, Get, Post, Put, Delete,
  Param, Body, Query, UseGuards,
  UploadedFiles, UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { CreationsService, CreateCreationDto } from './creations.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('creations')
export class CreationsController {
  constructor(private service: CreationsService) {}

  /* ─── Public ─── */
  @Get()
  findAll(@Query('categorie') cat?: string) {
    return this.service.findAll(cat);
  }

  @Get('featured')
  findFeatured() {
    return this.service.findFeatured();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.service.findOne(slug);
  }

  /* ─── Admin ─── */
  @UseGuards(JwtAuthGuard)
  @Get('admin/all')
  findAllAdmin() {
    return this.service.findAllAdmin();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateCreationDto) {
    return this.service.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: Partial<CreateCreationDto>) {
    return this.service.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }

  /* ─── Médias ─── */
  @UseGuards(JwtAuthGuard)
  @Post(':id/medias')
  @UseInterceptors(FilesInterceptor('files', 5, { storage: memoryStorage() }))
  addMedias(
    @Param('id') id: string,
    @UploadedFiles() files: Express.Multer.File[],
    @Query('couv') couv?: string,
  ) {
    return Promise.all(
      files.map((f, i) => this.service.addMedia(id, f.buffer, couv === 'true' && i === 0)),
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete('medias/:mediaId')
  removeMedia(@Param('mediaId') mediaId: string) {
    return this.service.removeMedia(mediaId);
  }
}
