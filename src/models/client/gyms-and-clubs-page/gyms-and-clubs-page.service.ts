import { Injectable } from '@nestjs/common';
import { ELangs, LangQueryDto } from 'src/app.dto';
import { FederationGymsAndClubEntity } from 'src/models/admin/federation-gyms-and-clubs/entities/federation-gyms-and-club.entity';
import { FederationGymsAndClubsService } from 'src/models/admin/federation-gyms-and-clubs/federation-gyms-and-clubs.service';
import { SportTypesService } from 'src/models/admin/sport-types/sport-types.service';
import { FilterOptionsDto } from './dto/filter-options.dto';
import { Prisma } from '@prisma/client';

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

  async getSportTypes(lang: ELangs): Promise<string[]> {
    const sportTypes = await this.stService.findAll({});
    const filteredSTs = sportTypes.map((st) => {
      return lang === ELangs.Tm ? st.nameTm : st.nameRu;
    });

    return filteredSTs;
  }

  async filterGymsAndClubs(
    query: FilterOptionsDto,
  ): Promise<FederationGymsAndClubEntity[]> {
    const langTransform = new LangQueryDto(query.lang);

    const { locations, sports, lang, name } = query;
    const where =
      lang === ELangs.Tm
        ? {
            locationTm: locations
              ? { contains: locations, mode: Prisma.QueryMode.insensitive }
              : undefined,
            sportsTm: sports ? { has: sports } : undefined,
            nameTm: name
              ? { contains: name, mode: Prisma.QueryMode.insensitive }
              : undefined,
          }
        : {
            locationRu: locations
              ? { contains: locations, mode: Prisma.QueryMode.insensitive }
              : undefined,
            sportsRu: sports ? { has: sports } : undefined,
            nameRu: name
              ? { contains: name, mode: Prisma.QueryMode.insensitive }
              : undefined,
          };

    let fgc = await this.fgcService.findAll({ where });
    fgc = langTransform.toName(fgc);

    return fgc;
  }
}
