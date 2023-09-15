import { Test, TestingModule } from '@nestjs/testing';
import { NewsDetailsService } from './news-details.service';

describe('NewsDetailsService', () => {
  let service: NewsDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsDetailsService],
    }).compile();

    service = module.get<NewsDetailsService>(NewsDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
