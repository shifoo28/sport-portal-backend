import { Test, TestingModule } from '@nestjs/testing';
import { FootballTeamsController } from './football-teams.controller';
import { FootballTeamsService } from './football-teams.service';

describe('FootballTeamsController', () => {
  let controller: FootballTeamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FootballTeamsController],
      providers: [FootballTeamsService],
    }).compile();

    controller = module.get<FootballTeamsController>(FootballTeamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
