import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LangsModule } from './langs/langs.module';
import { BaseCategoryModule } from './base-category/base-category.module';
import { NewsModule } from './news/news.module';
import { VideosModule } from './videos/videos.module';
import { AdsModule } from './ads/ads.module';
import { SportCategoriesModule } from './sport-categories/sport-categories.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'Upload') }),
    LangsModule,
    BaseCategoryModule,
    NewsModule,
    VideosModule,
    AdsModule,
    SportCategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
