import { Injectable } from '@nestjs/common';
import { LangQueryDto } from 'src/app.dto';
import { FederationGymsAndClubEntity } from 'src/models/admin/federation-gyms-and-clubs/entities/federation-gyms-and-club.entity';
import { FederationGymsAndClubsService } from 'src/models/admin/federation-gyms-and-clubs/federation-gyms-and-clubs.service';

export interface IGymClubPage {
  gymsclubs: FederationGymsAndClubEntity[];
}

@Injectable()
export class GymsAndClubsPageService {
  constructor(private readonly fgcService: FederationGymsAndClubsService) {}

  async findAll(query: LangQueryDto): Promise<IGymClubPage> {
    const langTransform = new LangQueryDto(query.lang);
    let gymsclubs = await this.fgcService.findAll({});
    gymsclubs = langTransform.toName(gymsclubs);

    return { gymsclubs };
  }
}
