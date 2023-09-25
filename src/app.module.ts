import { join } from 'path';
import { Module } from '@nestjs/common';
import { AdsModule } from './models/admin/ads/ads.module';
import { AppService } from './app.service';
import { NewsModule } from './models/admin/news/news.module';
import { LangsModule } from './models/admin/langs/langs.module';
import { LangService } from './models/admin/langs/lang.service';
import { VideosModule } from './models/admin/videos/videos.module';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { MainPageModule } from './models/client/home/main-page.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { BaseCategoryModule } from './models/admin/base-category/base-category.module';
import { BaseCategoryService } from './models/admin/base-category/base-category.service';
import { SportCategoriesModule } from './models/admin/sport-categories/sport-categories.module';
import { SportCategoriesService } from './models/admin/sport-categories/sport-categories.service';
import { FederationSportsModule } from './models/admin/federation-sports/federation-sports.module';
import { FederationAthleteModule } from './models/admin/federation-athlete/federation-athlete.module';
import { FederationTrainersModule } from './models/admin/federation-trainers/federation-trainers.module';
import { FederationsModule } from './models/admin/federations/federations.module';
import { FederationPageModule } from './models/client/federation-page/federation-page.module';
import { NewsDetailsModule } from './models/client/news-details/news-details.module';
import { FederationGymsAndClubsModule } from './models/admin/federation-gyms-and-clubs/federation-gyms-and-clubs.module';
import { FederationHealthCareEmployeesModule } from './models/admin/federation-health-care-employees/federation-health-care-employees.module';
import { HealthCareDepartmentsModule } from './models/admin/health-care-departments/health-care-departments.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './models/client/users/users.module';
import { ShopCategoriesModule } from './models/admin/shop-categories/shop-categories.module';
import { CompetitionTypesModule } from './models/admin/competition-types/competition-types.module';
import { CompetitionsModule } from './models/admin/competitions/competitions.module';
import { CompetitionPageModule } from './models/client/competition-page/competition-page.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'upload'),
      serveStaticOptions: {
        // setHeaders(res, path, stat) {
        //   console.log('RES: ');
        //   console.log(res);
        //   console.log('PATH:');
        //   console.log(path);
        //   console.log('STAT:');
        //   console.log(stat);
        // },
      },
    }),
    AuthModule,
    CompetitionPageModule,
    FederationPageModule,
    MainPageModule,
    NewsDetailsModule,
    UsersModule,
    LangsModule,
    NewsModule,
    VideosModule,
    AdsModule,
    BaseCategoryModule,
    SportCategoriesModule,
    FederationsModule,
    FederationSportsModule,
    FederationTrainersModule,
    FederationAthleteModule,
    FederationGymsAndClubsModule,
    HealthCareDepartmentsModule,
    FederationHealthCareEmployeesModule,
    ShopCategoriesModule,
    CompetitionTypesModule,
    CompetitionsModule,
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
