import { Test, TestingModule } from '@nestjs/testing';
import { FederationGymsAndClubsService } from './federation-gyms-and-clubs.service';

describe('FederationGymsAndClubsService', () => {
  let service: FederationGymsAndClubsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FederationGymsAndClubsService],
    }).compile();

    service = module.get<FederationGymsAndClubsService>(FederationGymsAndClubsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
