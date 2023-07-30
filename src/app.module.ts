import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LangsModule } from './langs/langs.module';
import { NewsCategoryModule } from './news-category/news-category.module';
import { BaseCategoryModule } from './base-category/base-category.module';
import { VideoCategoryModule } from './video-category/video-category.module';
import { NewsModule } from './news/news.module';
import { VideosModule } from './videos/videos.module';

@Module({
  imports: [LangsModule, NewsCategoryModule, BaseCategoryModule, VideoCategoryModule, NewsModule, VideosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
