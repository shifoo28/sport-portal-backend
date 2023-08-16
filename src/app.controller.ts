import { Controller, Get } from '@nestjs/common';
import { AppService, IApp } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<IApp> {
    return this.appService.getApp();
  }
}
