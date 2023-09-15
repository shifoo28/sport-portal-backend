import { Test, TestingModule } from '@nestjs/testing';
import { HealthCareDepartmentsController } from './health-care-departments.controller';
import { HealthCareDepartmentsService } from './health-care-departments.service';

describe('HealthCareDepartmentsController', () => {
  let controller: HealthCareDepartmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthCareDepartmentsController],
      providers: [HealthCareDepartmentsService],
    }).compile();

    controller = module.get<HealthCareDepartmentsController>(HealthCareDepartmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
