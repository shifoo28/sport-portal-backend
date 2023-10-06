import { Injectable } from '@nestjs/common';
import { LangService } from './models/admin/langs/lang.service';
import { BaseCategoryService } from './models/admin/base-category/base-category.service';
import { SportCategoriesService } from './models/admin/sport-categories/sport-categories.service';
import { LangQueryDto } from './app.dto';

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
  ) {}

  async getApp(query: LangQueryDto): Promise<IApp> {
    const langTransform = new LangQueryDto(query.lang);
    // Languages
    const lang = await this.lang.langs();

    // Base Categories
    let base_categories = await this.baseCategories.findAll({
      orderBy: { createdAt: 'asc' },
    });
    base_categories = langTransform.toName(base_categories);

    // Sport Categories
    let sport_categories = await this.sportCategory.findAll({
      where: { section: 'Local' },
    });
    sport_categories = langTransform.toName(sport_categories);

    return { lang, base_categories, sport_categories };
  }
}
