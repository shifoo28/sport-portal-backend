import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { MainPageService } from './main-page.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { LangQueryDto } from 'src/app.dto';
import { LanguageTransformInterceptor } from 'src/interceptor/language-transform.interceptor';
import { FindAllHomeNewsDto } from './dto/main-page.dto';
import { Public } from 'src/decorator/public-route.decorator';

@Public()
@Controller('main-page')
@ApiTags('Main Page')
export class MainPageController {
  constructor(private readonly mainPageService: MainPageService) {}

  @Get('')
  @ApiQuery({ type: LangQueryDto })
  @UseInterceptors(LanguageTransformInterceptor)
  @UseInterceptors(ResponseInterceptor)
  findAllNews(@Query() query: FindAllHomeNewsDto) {
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

  @Get('championships')
  @UseInterceptors(ResponseInterceptor)
  async findTeams() {
    const football = await this.mainPageService.findTeams('Football');
    const volleyball = await this.mainPageService.findTeams('Volleyball');

    return [football, volleyball];
  }
}
