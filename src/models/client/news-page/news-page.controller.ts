import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { NewsPageService } from './news-page.service';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';
import { FilterOptions } from './dto/filter-options.dto';

@Controller('news-page')
@ApiTags('News Page')
export class NewsPageController {
  constructor(private readonly newsPageService: NewsPageService) {}

  @Get()
  @UseInterceptors(ResponseInterceptor)
  async getFilterOptions(@Query() query: FilterOptions): Promise<any> {
    const sportCategories = await this.newsPageService.getSportCategories(
      query,
    );

    return { name: 'sportCategories', filters: sportCategories };
  }
}
