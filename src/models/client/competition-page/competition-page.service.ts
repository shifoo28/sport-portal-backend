import { Injectable } from '@nestjs/common';
import { CompetitionEntity } from 'src/models/admin/competitions/entities/competition.entity';
import { CompetitionsService } from 'src/models/admin/competitions/competitions.service';
import { CompetitionTypesService } from 'src/models/admin/competition-types/competition-types.service';
import { FilterOptionsDto } from './dto/filter-options.dto';
import { ELangs, LangQueryDto } from 'src/app.dto';

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

  // async findAllCompetitonTypes(): Promise<CompetitionTypeEntity[]> {
  //   return this.competitionTypeService.findAll({});
  // }

  async getcompetitionTypes(lang: ELangs): Promise<string[]> {
    const competitionTypes = await this.competitionTypeService.findAll({
      take: 999,
    });
    const filteredCTs = competitionTypes.map((ct) => {
      return lang === ELangs.Tm ? ct.nameTm : ct.nameRu;
    });

    return filteredCTs;
  }

  async filterCompetitions(
    query: FilterOptionsDto,
  ): Promise<CompetitionEntity[]> {
    const langTransform = new LangQueryDto(query.lang);

    const { lang, locations, competitionTypes, name } = query;
    const where =
      lang === ELangs.Tm
        ? {
            nameTm: name ? { contains: name } : undefined,
            locationTm: locations ? { contains: locations } : undefined,
            competitionType: competitionTypes
              ? { nameTm: { contains: competitionTypes } }
              : undefined,
            mode: 'insensitive',
          }
        : {
            nameRu: name ? { contains: name } : undefined,
            locationRu: locations ? { contains: locations } : undefined,
            competitionType: competitionTypes
              ? { nameRu: { contains: competitionTypes } }
              : undefined,
            mode: 'insensitive',
          };

    let competes = await this.competitionsService.findAll({
      where,
    });
    competes = langTransform.toName(competes);

    return competes;
  }
}
