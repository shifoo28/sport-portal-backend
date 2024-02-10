import { Test, TestingModule } from '@nestjs/testing';
import { TrainerRatingsService } from './trainer-ratings.service';

describe('TrainerRatingsService', () => {
  let service: TrainerRatingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainerRatingsService],
    }).compile();

    service = module.get<TrainerRatingsService>(TrainerRatingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
