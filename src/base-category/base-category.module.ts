import { Module } from '@nestjs/common';
import { BaseCategoryService } from './base-category.service';
import { BaseCategoryController } from './base-category.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BaseCategoryController],
  providers: [BaseCategoryService, PrismaService],
})
export class BaseCategoryModule {}
