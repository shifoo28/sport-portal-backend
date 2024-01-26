import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ChampionshipStatsService } from './championship-stats.service';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { Public } from 'src/decorator/public-route.decorator';

@Public()
@ApiTags('Championship Stats')
@Controller('championship-stats')
export class ChampionshipStatsController {
  constructor(
    private readonly championshipStatsService: ChampionshipStatsService,
  ) {}

  @Get('football')
  @UseInterceptors(ResponseInterceptor)
  findFootballTeams() {
    return this.championshipStatsService.findFootballTeams();
  }
}
