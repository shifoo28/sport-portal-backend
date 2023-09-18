import { Test, TestingModule } from '@nestjs/testing';
import { CompetitionPageController } from './competition-page.controller';
import { CompetitionPageService } from './competition-page.service';

describe('CompetitionPageController', () => {
  let controller: CompetitionPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompetitionPageController],
      providers: [CompetitionPageService],
    }).compile();

    controller = module.get<CompetitionPageController>(CompetitionPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
