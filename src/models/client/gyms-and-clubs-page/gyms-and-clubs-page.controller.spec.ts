import { Test, TestingModule } from '@nestjs/testing';
import { GymsAndClubsPageController } from './gyms-and-clubs-page.controller';
import { GymsAndClubsPageService } from './gyms-and-clubs-page.service';

describe('GymsAndClubsPageController', () => {
  let controller: GymsAndClubsPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GymsAndClubsPageController],
      providers: [GymsAndClubsPageService],
    }).compile();

    controller = module.get<GymsAndClubsPageController>(GymsAndClubsPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
