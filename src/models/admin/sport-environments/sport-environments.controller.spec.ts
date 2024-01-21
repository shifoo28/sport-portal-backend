import { Test, TestingModule } from '@nestjs/testing';
import { SportEnvironmentsController } from './sport-environments.controller';
import { SportEnvironmentsService } from './sport-environments.service';

describe('SportEnvironmentsController', () => {
  let controller: SportEnvironmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportEnvironmentsController],
      providers: [SportEnvironmentsService],
    }).compile();

    controller = module.get<SportEnvironmentsController>(SportEnvironmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
