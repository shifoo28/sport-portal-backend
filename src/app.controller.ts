import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService, IApp } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from './respone/response.interceptor';

@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(ResponseInterceptor)
  getAppDefoults(): Promise<IApp> {
    return this.appService.getApp();
  }
}
