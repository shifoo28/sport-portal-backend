import { Test, TestingModule } from '@nestjs/testing';
import { ChampionshipStatsController } from './championship-stats.controller';
import { ChampionshipStatsService } from './championship-stats.service';

describe('ChampionshipStatsController', () => {
  let controller: ChampionshipStatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChampionshipStatsController],
      providers: [ChampionshipStatsService],
    }).compile();

    controller = module.get<ChampionshipStatsController>(ChampionshipStatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
