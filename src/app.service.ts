import { Injectable } from '@nestjs/common';
import { LangService } from './models/admin/langs/lang.service';
import { BaseCategoryService } from './models/admin/base-category/base-category.service';
import { SportCategoriesService } from './models/admin/sport-categories/sport-categories.service';
import { ELangs, LangQueryDto, SearchDto } from './app.dto';
import { NewsEntity } from './models/admin/news/entities/news.entity';
import { NewsService } from './models/admin/news/news.service';
import { Prisma } from '@prisma/client';
import { ESection } from './models/client/home/dto/main-page.dto';

export interface IApp {
  lang: { id: string; name: string }[];
  base_categories: { id: string; nameTm: string; nameRu: string }[];
  sport_categories: {};
}

@Injectable()
export class AppService {
  constructor(
    private readonly lang: LangService,
    private readonly baseCategories: BaseCategoryService,
    private readonly sportCategory: SportCategoriesService,
    private readonly newsService: NewsService,
  ) {}

  async getApp(query: LangQueryDto): Promise<IApp> {
    const langTransform = new LangQueryDto(query.lang);
    // Languages
    const lang = await this.lang.langs();

    // Base Categories
    let base_categories = await this.baseCategories.findAll({
      where: { active: true },
    });
    base_categories = langTransform.toName(base_categories);

    // Sport Categories
    let local = await this.sportCategory.findAll({
      where: { section: ESection.Local },
    });
    let world = await this.sportCategory.findAll({
      where: { section: ESection.World },
    });
    let video = await this.sportCategory.findAll({
      where: { section: ESection.Video },
    });
    local = langTransform.toName(local);
    world = langTransform.toName(world);
    video = langTransform.toName(video);

    return { lang, base_categories, sport_categories: { local, world, video } };
  }

  async searchNews(query: SearchDto): Promise<NewsEntity[]> {
    const langTransform = new LangQueryDto(query.lang);
    const where =
      query.lang === ELangs.Tm
        ? {
            nameTm: {
              contains: query.name,
              mode: Prisma.QueryMode.insensitive,
            },
          }
        : {
            nameRu: {
              contains: query.name,
              mode: Prisma.QueryMode.insensitive,
            },
          };
    let news = await this.newsService.findAll({
      where,
    });
    news = langTransform.toName(news);

    return news;
  }
}
