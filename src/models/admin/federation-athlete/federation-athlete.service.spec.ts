import { Test, TestingModule } from '@nestjs/testing';
import { FederationAthleteService } from './federation-athlete.service';

describe('FederationAthleteService', () => {
  let service: FederationAthleteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FederationAthleteService],
    }).compile();

    service = module.get<FederationAthleteService>(FederationAthleteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
