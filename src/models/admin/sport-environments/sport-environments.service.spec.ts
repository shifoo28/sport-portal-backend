import { Test, TestingModule } from '@nestjs/testing';
import { SportEnvironmentsService } from './sport-environments.service';

describe('SportEnvironmentsService', () => {
  let service: SportEnvironmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SportEnvironmentsService],
    }).compile();

    service = module.get<SportEnvironmentsService>(SportEnvironmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
