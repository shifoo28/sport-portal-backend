import { Test, TestingModule } from '@nestjs/testing';
import { CompetitionPageService } from './competition-page.service';

describe('CompetitionPageService', () => {
  let service: CompetitionPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompetitionPageService],
    }).compile();

    service = module.get<CompetitionPageService>(CompetitionPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
