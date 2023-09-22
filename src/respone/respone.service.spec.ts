import { Test, TestingModule } from '@nestjs/testing';
import { ResponeService } from './respone.service';

describe('ResponeService', () => {
  let service: ResponeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResponeService],
    }).compile();

    service = module.get<ResponeService>(ResponeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
