import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
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

  @Get(':section')
  @ApiQuery({ type: LangQueryDto })
  @UseInterceptors(LanguageTransformInterceptor)
  @UseInterceptors(ResponseInterceptor)
  async findAllNews(@Param() params: FindAllHomeNewsDto) {
    switch (params.section) {
      case 'Local' || 'World':
        return this.mainPageService.findAllLWN(params);

      case 'Video':
        return this.mainPageService.findAllVideoN(params);

      default:
        return { message: 'Invalid Section' };
    }
  }
}
