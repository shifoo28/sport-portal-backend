import { Test, TestingModule } from '@nestjs/testing';
import { HcdepartmentPageService } from './hcdepartment-page.service';

describe('HcdepartmentPageService', () => {
  let service: HcdepartmentPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HcdepartmentPageService],
    }).compile();

    service = module.get<HcdepartmentPageService>(HcdepartmentPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
