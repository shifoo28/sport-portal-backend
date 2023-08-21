import { Test, TestingModule } from '@nestjs/testing';
import { FederationSportsController } from './federation-sports.controller';
import { FederationSportsService } from './federation-sports.service';

describe('FederationSportsController', () => {
  let controller: FederationSportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FederationSportsController],
      providers: [FederationSportsService],
    }).compile();

    controller = module.get<FederationSportsController>(FederationSportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
