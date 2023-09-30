import { Injectable } from '@nestjs/common';
import { SportCategoriesService } from 'src/models/admin/sport-categories/sport-categories.service';
import { FilterOptions } from './dto/filter-options.dto';
import { ELangs, LangQueryDto } from 'src/app.dto';
import { SportCategoryEntity } from 'src/models/admin/sport-categories/entities/sport-category.entity';

@Injectable()
export class NewsPageService {
  constructor(private readonly scService: SportCategoriesService) {}

  async getSportCategories(
    query: FilterOptions,
  ): Promise<SportCategoryEntity[]> {
    const langTransform = new LangQueryDto(query.lang);
    let sportCategories = await this.scService.findAll({});
    sportCategories = langTransform.toName(sportCategories);

    return sportCategories;
  }
}
