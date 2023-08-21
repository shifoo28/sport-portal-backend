import { Test, TestingModule } from '@nestjs/testing';
import { FederationSportsService } from './federation-sports.service';

describe('FederationSportsService', () => {
  let service: FederationSportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FederationSportsService],
    }).compile();

    service = module.get<FederationSportsService>(FederationSportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
