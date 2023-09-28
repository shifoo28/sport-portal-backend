import { Test, TestingModule } from '@nestjs/testing';
import { GymsAndClubsPageService } from './gyms-and-clubs-page.service';

describe('GymsAndClubsPageService', () => {
  let service: GymsAndClubsPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GymsAndClubsPageService],
    }).compile();

    service = module.get<GymsAndClubsPageService>(GymsAndClubsPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
