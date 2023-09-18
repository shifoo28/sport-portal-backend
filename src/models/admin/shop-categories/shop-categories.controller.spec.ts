import { Test, TestingModule } from '@nestjs/testing';
import { ShopCategoriesController } from './shop-categories.controller';
import { ShopCategoriesService } from './shop-categories.service';

describe('ShopCategoriesController', () => {
  let controller: ShopCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopCategoriesController],
      providers: [ShopCategoriesService],
    }).compile();

    controller = module.get<ShopCategoriesController>(ShopCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
