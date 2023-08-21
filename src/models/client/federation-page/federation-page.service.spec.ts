import { Test, TestingModule } from '@nestjs/testing';
import { FederationPageService } from './federation-page.service';

describe('FederationPageService', () => {
  let service: FederationPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FederationPageService],
    }).compile();

    service = module.get<FederationPageService>(FederationPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
