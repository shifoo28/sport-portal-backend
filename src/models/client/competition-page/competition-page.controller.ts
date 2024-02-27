import { Controller, Get, Post, Query, UseInterceptors } from '@nestjs/common';
import { CompetitionPageService } from './competition-page.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { LanguageTransformInterceptor } from 'src/interceptor/language.transform.interceptor';
import { ELangs, LangQueryDto } from 'src/app.dto';
import { CompetitionEntity } from 'src/models/admin/competitions/entities/competition.entity';
import { FilterOptionsDto } from './dto/filter-options.dto';
import { Public } from 'src/decorator/public-route.decorator';

@Public()
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

  @Get('filters')
  @UseInterceptors(ResponseInterceptor)
  async getFilterOptions(@Query() query: LangQueryDto) {
    const competitionTypes =
      await this.competitionPageService.getcompetitionTypes(query.lang);
    const venues = await this.competitionPageService.getVenues(query.lang);

    return [
      { name: 'competitionTypes', filters: competitionTypes },
      { name: 'venues', filters: venues },
    ];
  }

  @Post('filter')
  @UseInterceptors(LanguageTransformInterceptor)
  @UseInterceptors(ResponseInterceptor)
  async filterCompetitions(
    @Query() query: FilterOptionsDto,
  ): Promise<CompetitionEntity[]> {
    return this.competitionPageService.filterCompetitions(query);
  }
}
