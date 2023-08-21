import { Test, TestingModule } from '@nestjs/testing';
import { FederationTrainersController } from './federation-trainers.controller';
import { FederationTrainersService } from './federation-trainers.service';

describe('FederationTrainersController', () => {
  let controller: FederationTrainersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FederationTrainersController],
      providers: [FederationTrainersService],
    }).compile();

    controller = module.get<FederationTrainersController>(FederationTrainersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
