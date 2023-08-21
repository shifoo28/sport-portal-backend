import { Module } from '@nestjs/common';
import { MainPageService } from './main-page.service';
import { MainPageController } from './main-page.controller';
import { NewsService } from 'src/models/admin/news/news.service';
import { PrismaService } from 'src/prisma.service';
import { VideosService } from 'src/models/admin/videos/videos.service';

@Module({
  controllers: [MainPageController],
  providers: [MainPageService, NewsService, PrismaService, VideosService],
})
export class MainPageModule {}
