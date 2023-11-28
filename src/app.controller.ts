import { Controller, Get, Post, Query, UseInterceptors } from '@nestjs/common';
import { AppService, IApp } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { LangQueryDto, SearchDto } from './app.dto';
import { Public } from './tools/public-route';

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

    return { news };
  }
}
