import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeRatingsController } from './employee-ratings.controller';
import { EmployeeRatingsService } from './employee-ratings.service';

describe('EmployeeRatingsController', () => {
  let controller: EmployeeRatingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeRatingsController],
      providers: [EmployeeRatingsService],
    }).compile();

    controller = module.get<EmployeeRatingsController>(EmployeeRatingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
