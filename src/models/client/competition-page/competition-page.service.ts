import { Injectable } from '@nestjs/common';
import { CompetitionEntity } from 'src/models/admin/competitions/entities/competition.entity';
import { CompetitionsService } from 'src/models/admin/competitions/competitions.service';
import { CompetitionTypesService } from 'src/models/admin/competition-types/competition-types.service';
import { FilterOptionsDto } from './dto/filter-options.dto';
import { ELangs, LangQueryDto } from 'src/app.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class CompetitionPageService {
  constructor(
    private readonly competitionsService: CompetitionsService,
    private readonly competitionTypeService: CompetitionTypesService,
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
    const filteredCTs = competitionTypes.map((ct) => {
      return lang === ELangs.Tm ? ct.nameTm : ct.nameRu;
    });

    return filteredCTs;
  }

  async filterCompetitions(
    query: FilterOptionsDto,
  ): Promise<CompetitionEntity[]> {
    const { lang, locations, competitionTypes, name } = query;
    const where =
      lang === ELangs.Tm
        ? {
            nameTm: name
              ? { contains: name, mode: Prisma.QueryMode.insensitive }
              : undefined,
            locationTm: locations
              ? { contains: locations, mode: Prisma.QueryMode.insensitive }
              : undefined,
            competitionType: competitionTypes
              ? {
                  nameTm: {
                    contains: competitionTypes,
                    mode: Prisma.QueryMode.insensitive,
                  },
                }
              : undefined,
            startDate: { gte: new Date(query.startDate) },
            endDate: { lte: new Date(query.endDate) },
          }
        : {
            nameRu: name
              ? { contains: name, mode: Prisma.QueryMode.insensitive }
              : undefined,
            locationRu: locations
              ? { contains: locations, mode: Prisma.QueryMode.insensitive }
              : undefined,
            competitionType: competitionTypes
              ? {
                  nameRu: {
                    contains: competitionTypes,
                    mode: Prisma.QueryMode.insensitive,
                  },
                }
              : undefined,
            startDate: { gte: new Date(query.startDate) },
            endDate: { lte: new Date(query.endDate) },
          };

    let competitions = await this.competitionsService.findAll({
      where,
      include: { competitionType: true },
    });

    const langTransform = new LangQueryDto(query.lang);
    competitions = langTransform.toName(competitions);

    return competitions;
  }
}
