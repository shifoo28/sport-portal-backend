import { Injectable } from '@nestjs/common';
import { CompetitionEntity } from 'src/models/admin/competitions/entities/competition.entity';
import { CompetitionsService } from 'src/models/admin/competitions/competitions.service';

@Injectable()
export class CompetitionPageService {
  constructor(private readonly competitionsService: CompetitionsService) {}

  async findAll(): Promise<CompetitionEntity[]> {
    return this.competitionsService.findAll({
      include: {
        competitionType: { select: { id: true, nameTm: true, nameRu: true } },
      },
    });
  }
}
