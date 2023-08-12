import { Module } from '@nestjs/common';
import { SportCategoriesService } from './sport-categories.service';
import { SportCategoriesController } from './sport-categories.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SportCategoriesController],
  providers: [SportCategoriesService, PrismaService],
})
export class SportCategoriesModule {}
