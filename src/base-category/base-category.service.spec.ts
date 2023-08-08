import { Test, TestingModule } from '@nestjs/testing';
import { BaseCategoryService } from './base-category.service';

describe('BaseCategoryService', () => {
  let service: BaseCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaseCategoryService],
    }).compile();

    service = module.get<BaseCategoryService>(BaseCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
