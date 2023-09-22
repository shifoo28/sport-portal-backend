import { Injectable } from '@nestjs/common';
import { CompetitionEntity } from 'src/models/admin/competitions/entities/competition.entity';
import { CompetitionsService } from 'src/models/admin/competitions/competitions.service';
import { CompetitionTypesService } from 'src/models/admin/competition-types/competition-types.service';
import { CompetitionTypeEntity } from 'src/models/admin/competition-types/entities/competition-type.entity';

@Injectable()
export class CompetitionPageService {
  constructor(
    private readonly competitionsService: CompetitionsService,
    private readonly competitionTypeService: CompetitionTypesService,
  ) {}

  async findAllCompetitions(): Promise<CompetitionEntity[]> {
    return this.competitionsService.findAll({
      include: {
        competitionType: { select: { id: true, nameTm: true, nameRu: true } },
      },
    });
  }

  async findAllCompetitonTypes(): Promise<CompetitionTypeEntity[]> {
    return this.competitionTypeService.findAll({});
  }
}
