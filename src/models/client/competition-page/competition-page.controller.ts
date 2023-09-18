import { Controller, Get } from '@nestjs/common';
import { CompetitionPageService } from './competition-page.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('competition-page')
@ApiTags('Competition Page')
export class CompetitionPageController {
  constructor(
    private readonly competitionPageService: CompetitionPageService,
  ) {}

  @Get()
  async findAll() {
    const competitions = await this.competitionPageService.findAll();

    return { competitions };
  }
}
