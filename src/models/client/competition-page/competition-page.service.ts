import { Injectable } from '@nestjs/common';
import { CompetitionEntity } from 'src/models/admin/competitions/entities/competition.entity';
import { CompetitionsService } from 'src/models/admin/competitions/competitions.service';

@Injectable()
export class CompetitionPageService {
  constructor(
    private readonly competitionsService: CompetitionsService,
  ) // private readonly competitionTypeService: CompetitionTypesService,
  {}

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
}
