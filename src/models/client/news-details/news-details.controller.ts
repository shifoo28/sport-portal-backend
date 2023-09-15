import { Controller, Param, Patch, Query } from '@nestjs/common';
import { NewsDetailsService } from './news-details.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('news-details')
@ApiTags('News Details Page')
export class NewsDetailsController {
  constructor(private readonly newsDetailsService: NewsDetailsService) {}

  @Patch(':id')
  upadteViewsByOne(@Param('id') id: string, @Query('categoryId') cId: string) {
    return this.newsDetailsService.updateViewsByOne(id, cId);
  }
}
