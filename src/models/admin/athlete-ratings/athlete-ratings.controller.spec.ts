import { Test, TestingModule } from '@nestjs/testing';
import { AthleteRatingsController } from './athlete-ratings.controller';
import { AthleteRatingsService } from './athlete-ratings.service';

describe('AthleteRatingsController', () => {
  let controller: AthleteRatingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AthleteRatingsController],
      providers: [AthleteRatingsService],
    }).compile();

    controller = module.get<AthleteRatingsController>(AthleteRatingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
