import { Test, TestingModule } from '@nestjs/testing';
import { FootballTeamsService } from './football-teams.service';

describe('FootballTeamsService', () => {
  let service: FootballTeamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FootballTeamsService],
    }).compile();

    service = module.get<FootballTeamsService>(FootballTeamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
