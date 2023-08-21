import { Test, TestingModule } from '@nestjs/testing';
import { FederationTrainersService } from './federation-trainers.service';

describe('FederationTrainersService', () => {
  let service: FederationTrainersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FederationTrainersService],
    }).compile();

    service = module.get<FederationTrainersService>(FederationTrainersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
