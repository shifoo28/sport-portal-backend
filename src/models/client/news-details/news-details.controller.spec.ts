import { Test, TestingModule } from '@nestjs/testing';
import { NewsDetailsController } from './news-details.controller';
import { NewsDetailsService } from './news-details.service';

describe('NewsDetailsController', () => {
  let controller: NewsDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsDetailsController],
      providers: [NewsDetailsService],
    }).compile();

    controller = module.get<NewsDetailsController>(NewsDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
