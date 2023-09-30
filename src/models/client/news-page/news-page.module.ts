import { Module } from '@nestjs/common';
import { NewsPageService } from './news-page.service';
import { NewsPageController } from './news-page.controller';
import { SportCategoriesService } from 'src/models/admin/sport-categories/sport-categories.service';
import { PrismaService } from 'src/prisma.service';
import { NewsService } from 'src/models/admin/news/news.service';
import { VideosService } from 'src/models/admin/videos/videos.service';

@Module({
  controllers: [NewsPageController],
  providers: [
    NewsPageService,
    SportCategoriesService,
    PrismaService,
    NewsService,
    VideosService,
  ],
})
export class NewsPageModule {}
