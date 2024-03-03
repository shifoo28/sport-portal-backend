import { Injectable } from '@nestjs/common';
import { ELangs, LangQueryDto } from 'src/app.dto';
import { FederationGymsAndClubEntity } from 'src/models/admin/federation-gyms-and-clubs/entities/federation-gyms-and-club.entity';
import { FederationGymsAndClubsService } from 'src/models/admin/federation-gyms-and-clubs/federation-gyms-and-clubs.service';
import { SportTypesService } from 'src/models/admin/sport-types/sport-types.service';
import { FilterOptionsDto } from './dto/filter-options.dto';
import { Prisma } from '@prisma/client';
import { VenuesService } from 'src/models/admin/venues/venues.service';

export interface IGymClubPage {
  gymsclubs: FederationGymsAndClubEntity[];
}

@Injectable()
export class GymsAndClubsPageService {
  constructor(
    private readonly fgcService: FederationGymsAndClubsService,
    private readonly stService: SportTypesService,
    private readonly venueService: VenuesService,
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

  async getVenues(lang: ELangs): Promise<string[]> {
    const venues = await this.venueService.findAll({});

    return venues.map((venue) => {
      return lang === ELangs.Tm ? venue.nameTm : venue.nameRu;
    });
  }

  async filterGymsAndClubs(
    query: FilterOptionsDto,
  ): Promise<FederationGymsAndClubEntity[]> {
    const langTransform = new LangQueryDto(query.lang);

    const { venues, environments, sports, lang, name } = query;
    const where: Prisma.FederationGymsAndClubsWhereInput =
      lang === ELangs.Tm
        ? {
            venue: { nameTm: venues },
            environment: environments ? { nameTm: environments } : undefined,
            sportsTm: sports ? { has: sports } : undefined,
            nameTm: name
              ? { contains: name, mode: Prisma.QueryMode.insensitive }
              : undefined,
          }
        : {
            venue: { nameRu: venues },
            environment: environments ? { nameRu: environments } : undefined,
            sportsRu: sports ? { has: sports } : undefined,
            nameRu: name
              ? { contains: name, mode: Prisma.QueryMode.insensitive }
              : undefined,
          };

    let fgc = await this.fgcService.findAll({
      where,
      include: { environment: true, venue: true },
    });
    fgc = langTransform.toName(fgc);

    return fgc;
  }
}
