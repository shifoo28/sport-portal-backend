import { Test, TestingModule } from '@nestjs/testing';
import { ChampionshipStatsService } from './championship-stats.service';

describe('ChampionshipStatsService', () => {
  let service: ChampionshipStatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChampionshipStatsService],
    }).compile();

    service = module.get<ChampionshipStatsService>(ChampionshipStatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
