import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AdsModule } from './models/admin/ads/ads.module';
import { BaseCategoryModule } from './models/admin/base-category/base-category.module';
import { LangsModule } from './models/admin/langs/langs.module';
import { NewsModule } from './models/admin/news/news.module';
import { SportCategoriesModule } from './models/admin/sport-categories/sport-categories.module';
import { VideosModule } from './models/admin/videos/videos.module';
import { LangService } from './models/admin/langs/lang.service';
import { BaseCategoryService } from './models/admin/base-category/base-category.service';
import { SportCategoriesService } from './models/admin/sport-categories/sport-categories.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'upload') }),
    LangsModule,
    BaseCategoryModule,
    NewsModule,
    VideosModule,
    AdsModule,
    SportCategoriesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    LangService,
    BaseCategoryService,
    SportCategoriesService,
    PrismaService,
  ],
})
export class AppModule {}
