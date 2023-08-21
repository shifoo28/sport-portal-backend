import { Test, TestingModule } from '@nestjs/testing';
import { FederationAthleteController } from './federation-athlete.controller';
import { FederationAthleteService } from './federation-athlete.service';

describe('FederationAthleteController', () => {
  let controller: FederationAthleteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FederationAthleteController],
      providers: [FederationAthleteService],
    }).compile();

    controller = module.get<FederationAthleteController>(FederationAthleteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
