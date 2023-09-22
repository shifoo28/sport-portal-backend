import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { MainPageService } from './main-page.service';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/respone/response.interceptor';
import { Sections } from '@prisma/client';

@Controller('main-page')
@ApiTags('Main Page')
export class MainPageController {
  constructor(private readonly mainPageService: MainPageService) {}

  @Get(':section')
  @UseInterceptors(ResponseInterceptor)
  async findAllLocalNews(
    @Param('section') section: Sections,
  ) {
    switch (section) {
      case 'local':
        return { local: await this.mainPageService.findAllLWN('Local') };

      case 'world':
        return { world: await this.mainPageService.findAllLWN('World') };

      case 'video':
        return { video: await this.mainPageService.findAllVideoN() };

      default:
        return;
    }
  }
}
