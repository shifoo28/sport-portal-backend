import { Test, TestingModule } from '@nestjs/testing';
import { FederationPageController } from './federation-page.controller';
import { FederationPageService } from './federation-page.service';

describe('FederationPageController', () => {
  let controller: FederationPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FederationPageController],
      providers: [FederationPageService],
    }).compile();

    controller = module.get<FederationPageController>(FederationPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
