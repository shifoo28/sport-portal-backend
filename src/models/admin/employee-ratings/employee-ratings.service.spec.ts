import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeRatingsService } from './employee-ratings.service';

describe('EmployeeRatingsService', () => {
  let service: EmployeeRatingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeRatingsService],
    }).compile();

    service = module.get<EmployeeRatingsService>(EmployeeRatingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
