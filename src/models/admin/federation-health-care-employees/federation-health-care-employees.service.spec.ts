import { Test, TestingModule } from '@nestjs/testing';
import { FederationHealthCareEmployeesService } from './federation-health-care-employees.service';

describe('FederationHealthCareEmployeesService', () => {
  let service: FederationHealthCareEmployeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FederationHealthCareEmployeesService],
    }).compile();

    service = module.get<FederationHealthCareEmployeesService>(FederationHealthCareEmployeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
