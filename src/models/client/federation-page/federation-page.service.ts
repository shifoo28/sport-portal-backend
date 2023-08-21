import { Injectable } from '@nestjs/common';
import { FederationSportEntity } from 'src/models/admin/federation-sports/entities/federation-sport.entity';
import { FederationSportsService } from 'src/models/admin/federation-sports/federation-sports.service';
import { FederationsEntity } from 'src/models/admin/federations/entities/federation.entity';
import { FederationsService } from 'src/models/admin/federations/federations.service';

@Injectable()
export class FederationPageService {
  constructor(
    private readonly fSports: FederationSportsService,
    private readonly federation: FederationsService,
  ) {}

  async findFederations(): Promise<FederationsEntity[]> {
    return this.federation.findAll({ orderBy: { updatedAt: 'asc' } });
  }

  async findAllFederationSports(): Promise<FederationSportEntity[]> {
    return this.fSports.findAll({
      include: {
        federation: { select: { id: true, nameTm: true, nameRu: true } },
      },
    });
  }
}
