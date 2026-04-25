import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { CreationsModule } from './creations/creations.module';
import { CommandesModule } from './commandes/commandes.module';
import { AvisModule } from './avis/avis.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    CategoriesModule,
    CreationsModule,
    CommandesModule,
    AvisModule,
  ],
})
export class AppModule {}
