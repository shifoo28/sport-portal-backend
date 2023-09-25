import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { AppService, IApp } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { LangQueryDto } from './app.dto';

@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(ResponseInterceptor)
  getAppDefoults(@Query() query: LangQueryDto): Promise<IApp> {
    return this.appService.getApp(query);
  }
}
