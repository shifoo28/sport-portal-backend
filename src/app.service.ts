import { Injectable } from '@nestjs/common';
import { LangService } from './models/admin/langs/lang.service';
import { BaseCategoryService } from './models/admin/base-category/base-category.service';
import { SportCategoriesService } from './models/admin/sport-categories/sport-categories.service';

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

  async getApp(): Promise<IApp> {
    const lang = await this.lang.langs({});
    const bc = await this.baseCategories.findAll({});
    const sc = await this.sportCategory.findAll({
      where: { section: 'Local' },
    });

    return {
      lang: lang.map((i) => {
        return { id: i.id, name: i.name };
      }),
      base_categories: bc.map((i) => {
        return { id: i.id, nameTm: i.nameTm, nameRu: i.nameRu };
      }),
      sport_categories: sc.map((i) => {
        return {
          id: i.id,
          nameRu: i.nameRu,
          nameTm: i.nameTm,
        };
      }),
    };
  }
}
