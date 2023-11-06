import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { MainPageService } from './main-page.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';
import { LangQueryDto } from 'src/app.dto';
import { LanguageTransformInterceptor } from 'src/interceptors/language.transform.interceptor';
import { FindAllHomeNewsDto } from './dto/main-page.dto';

@Controller('main-page')
@ApiTags('Main Page')
export class MainPageController {
  constructor(private readonly mainPageService: MainPageService) {}

  @Get('')
  @ApiQuery({ type: LangQueryDto })
  @UseInterceptors(LanguageTransformInterceptor)
  @UseInterceptors(ResponseInterceptor)
  async findAllNews(@Query() query: FindAllHomeNewsDto) {
    switch (query.section) {
      case 'Local':
        return this.mainPageService.findAllLWN(query);

      case 'World':
        return this.mainPageService.findAllLWN(query);

      case 'Video':
        return this.mainPageService.findAllVideoN(query);

      default:
        return { message: 'Invalid Section' };
    }
  }
}
