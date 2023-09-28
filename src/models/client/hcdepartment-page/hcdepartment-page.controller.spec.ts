import { Test, TestingModule } from '@nestjs/testing';
import { HcdepartmentPageController } from './hcdepartment-page.controller';
import { HcdepartmentPageService } from './hcdepartment-page.service';

describe('HcdepartmentPageController', () => {
  let controller: HcdepartmentPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HcdepartmentPageController],
      providers: [HcdepartmentPageService],
    }).compile();

    controller = module.get<HcdepartmentPageController>(HcdepartmentPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
