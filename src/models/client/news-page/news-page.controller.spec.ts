import { Test, TestingModule } from '@nestjs/testing';
import { NewsPageController } from './news-page.controller';
import { NewsPageService } from './news-page.service';

describe('NewsPageController', () => {
  let controller: NewsPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsPageController],
      providers: [NewsPageService],
    }).compile();

    controller = module.get<NewsPageController>(NewsPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
