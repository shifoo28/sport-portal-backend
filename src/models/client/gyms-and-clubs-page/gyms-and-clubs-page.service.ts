import { Injectable } from '@nestjs/common';
import { ELangs, LangQueryDto } from 'src/app.dto';
import { FederationGymsAndClubEntity } from 'src/models/admin/federation-gyms-and-clubs/entities/federation-gyms-and-club.entity';
import { FederationGymsAndClubsService } from 'src/models/admin/federation-gyms-and-clubs/federation-gyms-and-clubs.service';
import { SportTypeEntity } from 'src/models/admin/sport-types/entities/sport-type.entity';
import { SportTypesService } from 'src/models/admin/sport-types/sport-types.service';
import { FilterOptionsDto } from './dto/filter-options.dto';

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

  async getGymsAndClubs(
    query: FilterOptionsDto,
  ): Promise<FederationGymsAndClubEntity[]> {
    let { location, sportType, lang, name } = query;
    const where =
      lang === ELangs.Tm
        ? {
            locationTm: location ? { contains: location } : undefined,
            sportsTm: sportType ? { has: sportType } : undefined,
            nameTm: name ? { contains: name } : undefined,
          }
        : {
            locationRu: location ? { contains: location } : undefined,
            sportsRu: sportType ? { has: sportType } : undefined,
            nameRu: name ? { contains: name } : undefined,
          };

    return this.fgcService.findAll({ where });
  }
}
