import { Controller, Get } from '@nestjs/common';
import { AppService, IApp } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAppDefoults(): Promise<IApp> {
    return this.appService.getApp();
  }
}
