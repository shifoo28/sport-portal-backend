import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { CompetitionPageService } from './competition-page.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';
import { LanguageTransformInterceptor } from 'src/interceptors/language.transform.interceptor';
import { LangQueryDto } from 'src/app.dto';

@Controller('competition-page')
@ApiTags('Competition Page')
export class CompetitionPageController {
  constructor(
    private readonly competitionPageService: CompetitionPageService,
  ) {}

  @Get()
  @ApiQuery({ type: LangQueryDto })
  @UseInterceptors(LanguageTransformInterceptor)
  @UseInterceptors(ResponseInterceptor)
  async findAllCompetitions() {
    const competitions =
      await this.competitionPageService.findAllCompetitions();

    return competitions;
  }
}
