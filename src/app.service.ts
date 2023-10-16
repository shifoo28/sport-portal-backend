import { Injectable } from '@nestjs/common';
import { LangService } from './models/admin/langs/lang.service';
import { BaseCategoryService } from './models/admin/base-category/base-category.service';
import { SportCategoriesService } from './models/admin/sport-categories/sport-categories.service';
import { ELangs, LangQueryDto, SearchDto } from './app.dto';
import { NewsEntity } from './models/admin/news/entities/news.entity';
import { NewsService } from './models/admin/news/news.service';
import { Prisma } from '@prisma/client';

export interface IApp {
  lang: { id: string; name: string }[];
  base_categories: { id: string; nameTm: string; nameRu: string }[];
  sport_categories: { id: string; nameTm: string; nameRu: string }[];
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
      orderBy: { createdAt: 'asc' },
      where: { active: true },
    });
    base_categories = langTransform.toName(base_categories);

    // Sport Categories
    let sport_categories = await this.sportCategory.findAll({
      where: { section: 'Local' },
    });
    sport_categories = langTransform.toName(sport_categories);

    return { lang, base_categories, sport_categories };
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
