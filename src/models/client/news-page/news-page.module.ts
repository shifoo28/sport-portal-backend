import { Module } from '@nestjs/common';
import { NewsPageService } from './news-page.service';
import { NewsPageController } from './news-page.controller';
import { SportCategoriesService } from 'src/models/admin/sport-categories/sport-categories.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [NewsPageController],
  providers: [NewsPageService, SportCategoriesService, PrismaService],
})
export class NewsPageModule {}
