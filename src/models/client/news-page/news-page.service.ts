import { Injectable } from '@nestjs/common';
import { SportCategoriesService } from 'src/models/admin/sport-categories/sport-categories.service';
import { LangQueryDto } from 'src/app.dto';
import { SportCategoryEntity } from 'src/models/admin/sport-categories/entities/sport-category.entity';
import { NewsEntity } from 'src/models/admin/news/entities/news.entity';
import { GetFilterOptions, PostFilterOptions } from './dto/filter-options.dto';
import { NewsService } from 'src/models/admin/news/news.service';
import { VideoEntity } from 'src/models/admin/videos/entities/video.entity';
import { VideosService } from 'src/models/admin/videos/videos.service';

@Injectable()
export class NewsPageService {
  constructor(
    private readonly scService: SportCategoriesService,
    private readonly newsService: NewsService,
    private readonly videosService: VideosService,
  ) {}

  async getSportCategories(
    query: GetFilterOptions,
  ): Promise<SportCategoryEntity[]> {
    const langTransform = new LangQueryDto(query.lang);
    let sportCategories = await this.scService.findAll({
      where: { section: query.section },
    });
    sportCategories = langTransform.toName(sportCategories);

    return sportCategories;
  }

  async filterNews(query: PostFilterOptions): Promise<NewsEntity[]> {
    return this.newsService.findAll({
      where: { categoryId: query.sportCategories },
    });
  }

  async filterVideoNews(query: PostFilterOptions): Promise<VideoEntity[]> {
    return this.videosService.findAll({
      where: { categoryId: query.sportCategories },
    });
  }
}
