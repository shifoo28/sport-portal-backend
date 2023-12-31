import { Controller, Param, Patch, Query, UseInterceptors } from '@nestjs/common';
import { NewsDetailsService } from './news-details.service';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { Public } from 'src/decorator/public-route.decorator';

@Public()
@Controller('news-details')
@ApiTags('News Details Page')
export class NewsDetailsController {
  constructor(private readonly newsDetailsService: NewsDetailsService) {}

  @Patch(':id')
  @UseInterceptors(ResponseInterceptor)
  upadteViewsByOne(@Param('id') id: string, @Query('categoryId') cId: string) {
    return this.newsDetailsService.updateViewsByOne(id, cId);
  }
}
