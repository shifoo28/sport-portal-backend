import { Test, TestingModule } from '@nestjs/testing';
import { BaseCategoryController } from './base-category.controller';
import { BaseCategoryService } from './base-category.service';

describe('BaseCategoryController', () => {
  let controller: BaseCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaseCategoryController],
      providers: [BaseCategoryService],
    }).compile();

    controller = module.get<BaseCategoryController>(BaseCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
