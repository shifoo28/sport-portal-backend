import { Injectable } from '@nestjs/common';
import { CompetitionEntity } from 'src/models/admin/competitions/entities/competition.entity';
import { CompetitionsService } from 'src/models/admin/competitions/competitions.service';
import { CompetitionTypesService } from 'src/models/admin/competition-types/competition-types.service';
import { CompetitionTypeEntity } from 'src/models/admin/competition-types/entities/competition-type.entity';
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

  async getcompetitionTypes(): Promise<CompetitionTypeEntity[]> {
    return this.competitionTypeService.findAll({ take: 999 });
  }

  async filterCompetitions(
    query: FilterOptionsDto,
  ): Promise<CompetitionEntity[]> {
    const langTransform = new LangQueryDto(query.lang);

    const { lang, locations, competitionType, name } = query;
    const where =
      lang === ELangs.Tm
        ? {
            nameTm: name ? { contains: name } : undefined,
            locationTm: locations ? { contains: locations } : undefined,
            competitionType: competitionType
              ? { nameTm: { contains: competitionType } }
              : undefined,
          }
        : {
            nameRu: name ? { contains: name } : undefined,
            locationRu: locations ? { contains: locations } : undefined,
            competitionType: competitionType
              ? { nameRu: { contains: competitionType } }
              : undefined,
          };

    let competes = await this.competitionsService.findAll({
      where,
    });
    competes = langTransform.toName(competes);

    return competes;
  }
}
