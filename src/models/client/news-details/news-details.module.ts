import { Module } from '@nestjs/common';
import { NewsDetailsService } from './news-details.service';
import { NewsDetailsController } from './news-details.controller';
import { NewsService } from 'src/models/admin/news/news.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [NewsDetailsController],
  providers: [NewsDetailsService, NewsService, PrismaService],
})
export class NewsDetailsModule {}
