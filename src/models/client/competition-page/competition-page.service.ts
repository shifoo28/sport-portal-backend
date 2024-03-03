import { Injectable } from '@nestjs/common';
import { CompetitionEntity } from 'src/models/admin/competitions/entities/competition.entity';
import { CompetitionsService } from 'src/models/admin/competitions/competitions.service';
import { CompetitionTypesService } from 'src/models/admin/competition-types/competition-types.service';
import { FilterOptionsDto } from './dto/filter-options.dto';
import { ELangs, LangQueryDto } from 'src/app.dto';
import { Prisma } from '@prisma/client';
import { VenuesService } from 'src/models/admin/venues/venues.service';

@Injectable()
export class CompetitionPageService {
  constructor(
    private readonly competitionsService: CompetitionsService,
    private readonly competitionTypeService: CompetitionTypesService,
    private readonly venueService: VenuesService,
  ) {}

  async findAllCompetitions(): Promise<CompetitionEntity[]> {
    return this.competitionsService.findAll({
      include: {
        competitionType: true,
      },
    });
  }

  async getcompetitionTypes(lang: ELangs): Promise<string[]> {
    const competitionTypes = await this.competitionTypeService.findAll({});

    return competitionTypes.map((ct) => {
      return lang === ELangs.Tm ? ct.nameTm : ct.nameRu;
    });
  }

  async getVenues(lang: ELangs): Promise<string[]> {
    const venues = await this.venueService.findAll({});

    return venues.map((ct) => {
      return lang === ELangs.Tm ? ct.nameTm : ct.nameRu;
    });
  }

  async filterCompetitions(
    query: FilterOptionsDto,
  ): Promise<CompetitionEntity[]> {
    const { lang, venues, competitionTypes, name, startDate, endDate } = query;
    // where clouse tayyarlamak
    const where: Prisma.CompetitionsWhereInput =
      lang === ELangs.Tm
        ? {
            // Turkmen dilinde
            nameTm: name
              ? { contains: name, mode: Prisma.QueryMode.insensitive }
              : undefined,
            venue: venues ? { nameTm: venues } : { NOT: { nameTm: 'Halkara' } }, // Bad experience
            competitionType: competitionTypes
              ? {
                  nameTm: {
                    contains: competitionTypes,
                    mode: Prisma.QueryMode.insensitive,
                  },
                }
              : undefined,
            startDate: startDate ? { gte: new Date(startDate) } : undefined,
            endDate: endDate ? { lte: new Date(endDate) } : undefined,
          }
        : {
            // Rus dilinde
            nameRu: name
              ? { contains: name, mode: Prisma.QueryMode.insensitive }
              : undefined,
            venue: venues ? { nameRu: venues } : { NOT: { nameRu: 'Halkara' } }, // Bad experience
            competitionType: competitionTypes
              ? {
                  nameRu: {
                    contains: competitionTypes,
                    mode: Prisma.QueryMode.insensitive,
                  },
                }
              : undefined,
            startDate: startDate ? { gte: new Date(startDate) } : undefined,
            endDate: endDate ? { lte: new Date(endDate) } : undefined,
          };

    let competitions = await this.competitionsService.findAll({
      where,
      include: { competitionType: true, venue: true },
    });

    const langTransform = new LangQueryDto(query.lang);
    competitions = langTransform.toName(competitions);

    return competitions;
  }
}
