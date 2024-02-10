import { Test, TestingModule } from '@nestjs/testing';
import { AthleteRatingsService } from './athlete-ratings.service';

describe('AthleteRatingsService', () => {
  let service: AthleteRatingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AthleteRatingsService],
    }).compile();

    service = module.get<AthleteRatingsService>(AthleteRatingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
