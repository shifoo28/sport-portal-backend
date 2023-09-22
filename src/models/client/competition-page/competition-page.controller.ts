import { Controller, UseInterceptors } from '@nestjs/common';
import { CompetitionPageService } from './competition-page.service';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/respone/response.interceptor';

@Controller('competition-page')
@ApiTags('Competition Page')
export class CompetitionPageController {
  constructor(
    private readonly competitionPageService: CompetitionPageService,
  ) {}

  @UseInterceptors(ResponseInterceptor)
  async findAllCompetitions() {
    const competitions =
      await this.competitionPageService.findAllCompetitions();

    return competitions;
  }
}
