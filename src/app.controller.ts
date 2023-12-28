import { Controller, Get, Post, Query, UseInterceptors } from '@nestjs/common';
import { AppService, IApp } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from './interceptor/response.interceptor';
import { LangQueryDto, SearchDto } from './app.dto';
import { Public } from './decorator/public-route.decorator';

@Public()
@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(ResponseInterceptor)
  getAppDefoults(@Query() query: LangQueryDto): Promise<IApp> {
    return this.appService.getApp(query);
  }

  @Post('search')
  @UseInterceptors(ResponseInterceptor)
  async search(@Query() query: SearchDto) {
    const news = await this.appService.searchNews(query);
    const videos = await this.appService.searchVideos(query);

    return { news, videos };
  }
}
