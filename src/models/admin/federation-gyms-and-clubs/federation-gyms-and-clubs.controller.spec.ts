import { Test, TestingModule } from '@nestjs/testing';
import { FederationGymsAndClubsController } from './federation-gyms-and-clubs.controller';
import { FederationGymsAndClubsService } from './federation-gyms-and-clubs.service';

describe('FederationGymsAndClubsController', () => {
  let controller: FederationGymsAndClubsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FederationGymsAndClubsController],
      providers: [FederationGymsAndClubsService],
    }).compile();

    controller = module.get<FederationGymsAndClubsController>(FederationGymsAndClubsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
