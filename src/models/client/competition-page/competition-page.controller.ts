import { Controller, Get, Post, Query, UseInterceptors } from '@nestjs/common';
import { CompetitionPageService } from './competition-page.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';
import { LanguageTransformInterceptor } from 'src/interceptors/language.transform.interceptor';
import { ELangs, LangQueryDto } from 'src/app.dto';
import { countries } from 'src/tools/constants';
import { CompetitionEntity } from 'src/models/admin/competitions/entities/competition.entity';
import { FilterOptionsDto } from './dto/filter-options.dto';
import { Public } from 'src/tools/public-route';

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
    let competitionTypes =
      await this.competitionPageService.getcompetitionTypes(query.lang);

    const locations = countries.map((c) => {
      return query.lang === ELangs.Tm ? c.nameTm : c.nameRu;
    });

    return [
      { name: 'competitionTypes', filters: competitionTypes },
      { name: 'locations', filters: locations },
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
