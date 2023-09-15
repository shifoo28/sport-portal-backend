import { Test, TestingModule } from '@nestjs/testing';
import { FederationHealthCareEmployeesController } from './federation-health-care-employees.controller';
import { FederationHealthCareEmployeesService } from './federation-health-care-employees.service';

describe('FederationHealthCareEmployeesController', () => {
  let controller: FederationHealthCareEmployeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FederationHealthCareEmployeesController],
      providers: [FederationHealthCareEmployeesService],
    }).compile();

    controller = module.get<FederationHealthCareEmployeesController>(FederationHealthCareEmployeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
