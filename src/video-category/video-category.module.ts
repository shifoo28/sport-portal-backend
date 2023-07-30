import { Module } from '@nestjs/common';
import { VideoCategoryService } from './video-category.service';
import { VideoCategoryController } from './video-category.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [VideoCategoryController],
  providers: [VideoCategoryService, PrismaService],
})
export class VideoCategoryModule {}
