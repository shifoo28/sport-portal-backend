import { Injectable } from '@nestjs/common';
import { LangQueryDto } from 'src/app.dto';
import { FederationGymsAndClubEntity } from 'src/models/admin/federation-gyms-and-clubs/entities/federation-gyms-and-club.entity';
import { FederationGymsAndClubsService } from 'src/models/admin/federation-gyms-and-clubs/federation-gyms-and-clubs.service';
import { SportTypeEntity } from 'src/models/admin/sport-types/entities/sport-type.entity';
import { SportTypesService } from 'src/models/admin/sport-types/sport-types.service';

export interface IGymClubPage {
  gymsclubs: FederationGymsAndClubEntity[];
}

@Injectable()
export class GymsAndClubsPageService {
  constructor(
    private readonly fgcService: FederationGymsAndClubsService,
    private readonly stService: SportTypesService,
  ) {}

  async findAll(query: LangQueryDto): Promise<IGymClubPage> {
    const langTransform = new LangQueryDto(query.lang);
    let gymsclubs = await this.fgcService.findAll({});
    gymsclubs = langTransform.toName(gymsclubs);

    return { gymsclubs };
  }

  async getSportTypes(): Promise<SportTypeEntity[]> {
    return this.stService.findAll({ take: 999 });
  }
}
