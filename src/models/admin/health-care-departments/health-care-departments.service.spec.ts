import { Test, TestingModule } from '@nestjs/testing';
import { HealthCareDepartmentsService } from './health-care-departments.service';

describe('HealthCareDepartmentsService', () => {
  let service: HealthCareDepartmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthCareDepartmentsService],
    }).compile();

    service = module.get<HealthCareDepartmentsService>(HealthCareDepartmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
