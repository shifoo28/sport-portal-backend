import { Test, TestingModule } from '@nestjs/testing';
import { ShopCategoriesService } from './shop-categories.service';

describe('ShopCategoriesService', () => {
  let service: ShopCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopCategoriesService],
    }).compile();

    service = module.get<ShopCategoriesService>(ShopCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
