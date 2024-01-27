import { Injectable } from '@nestjs/common';
import { ChampionshipsService } from 'src/models/admin/championships/championships.service';
import { ChampionshipEntity } from 'src/models/admin/championships/entities/championship.entity';

@Injectable()
export class ChampionshipStatsService {
  constructor(private readonly championshipsService: ChampionshipsService) {}

  async findFootballTeams(): Promise<ChampionshipEntity[]> {
    return this.championshipsService.findAll({
      include: {
        FootballTeams: {
          orderBy: [
            { points: 'desc' },
            { win: 'desc' },
            { goalsScored: 'desc' },
          ],
        },
      },
    });
  }
}
