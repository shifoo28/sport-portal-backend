import { Controller, Get, Post, Query, UseInterceptors } from '@nestjs/common';
import { NewsPageService } from './news-page.service';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { PostFilterOptions, GetFilterOptions } from './dto/filter-options.dto';
import { NewsEntity } from 'src/models/admin/news/entities/news.entity';
import { LanguageTransformInterceptor } from 'src/interceptor/language-transform.interceptor';
import { Sections } from '@prisma/client';
import { VideoEntity } from 'src/models/admin/videos/entities/video.entity';
import { Public } from 'src/decorator/public-route.decorator';

@Public()
@Controller('news-page')
@ApiTags('News Page')
export class NewsPageController {
  constructor(private readonly newsPageService: NewsPageService) {}

  @Get('filters')
  @UseInterceptors(ResponseInterceptor)
  async getFilterOptions(@Query() query: GetFilterOptions): Promise<any> {
    const sportCategories = await this.newsPageService.getSportCategories(
      query,
    );

    return { name: 'sportCategories', filters: sportCategories };
  }

  @Post('filter')
  @UseInterceptors(LanguageTransformInterceptor)
  @UseInterceptors(ResponseInterceptor)
  async filterNews(
    @Query() query: PostFilterOptions,
  ): Promise<NewsEntity[] | VideoEntity[]> {
    return query.section === Sections.Video
      ? this.newsPageService.filterVideoNews(query)
      : this.newsPageService.filterNews(query);
  }
}
