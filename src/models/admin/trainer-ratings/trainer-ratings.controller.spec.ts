import { Test, TestingModule } from '@nestjs/testing';
import { TrainerRatingsController } from './trainer-ratings.controller';
import { TrainerRatingsService } from './trainer-ratings.service';

describe('TrainerRatingsController', () => {
  let controller: TrainerRatingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainerRatingsController],
      providers: [TrainerRatingsService],
    }).compile();

    controller = module.get<TrainerRatingsController>(TrainerRatingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
