import { Controller, Get, Param } from '@nestjs/common';
import { MainPageService } from './main-page.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('main-page')
@ApiTags('Main Page')
export class MainPageController {
  constructor(private readonly mainPageService: MainPageService) {}

  @Get(':section')
  async findAllLocalNews(@Param('section') section: string) {
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
