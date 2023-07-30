import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { LangService } from './langs/lang.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
