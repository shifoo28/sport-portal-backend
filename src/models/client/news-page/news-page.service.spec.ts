import { Test, TestingModule } from '@nestjs/testing';
import { NewsPageService } from './news-page.service';

describe('NewsPageService', () => {
  let service: NewsPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsPageService],
    }).compile();

    service = module.get<NewsPageService>(NewsPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
