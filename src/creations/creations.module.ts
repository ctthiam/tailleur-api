import { Module } from '@nestjs/common';
import { CreationsController } from './creations.controller';
import { CreationsService } from './creations.service';
import { CloudinaryService } from '../media/cloudinary.service';

@Module({
  controllers: [CreationsController],
  providers: [CreationsService, CloudinaryService],
})
export class CreationsModule {}
