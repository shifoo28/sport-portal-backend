import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { MainPageService } from './main-page.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';
import { LangQueryDto } from 'src/app.dto';
import { LanguageTransformInterceptor } from 'src/interceptors/language.transform.interceptor';
import { ESection } from './dto/create-main-page.dto';

@Controller('main-page')
@ApiTags('Main Page')
export class MainPageController {
  constructor(private readonly mainPageService: MainPageService) {}

  @Get(':section')
  @ApiQuery({ type: LangQueryDto })
  @UseInterceptors(LanguageTransformInterceptor)
  @UseInterceptors(ResponseInterceptor)
  async findAllLocalNews(@Param('section') section: ESection) {
    switch (section) {
      case 'Local':
        return this.mainPageService.findAllLWN('Local');

      case 'World':
        return this.mainPageService.findAllLWN('World');

      case 'Video':
        return this.mainPageService.findAllVideoN();

      default:
        return { message: 'Invalid Section' };
    }
  }
}
