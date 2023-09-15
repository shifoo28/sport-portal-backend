import { Injectable } from '@nestjs/common';
import { FederationAthleteEntity } from 'src/models/admin/federation-athlete/entities/federation-athlete.entity';
import { FederationAthleteService } from 'src/models/admin/federation-athlete/federation-athlete.service';
import { FederationSportEntity } from 'src/models/admin/federation-sports/entities/federation-sport.entity';
import { FederationSportsService } from 'src/models/admin/federation-sports/federation-sports.service';
import { FederationTrainerEntity } from 'src/models/admin/federation-trainers/entities/federation-trainer.entity';
import { FederationTrainersService } from 'src/models/admin/federation-trainers/federation-trainers.service';
import { FederationsEntity } from 'src/models/admin/federations/entities/federation.entity';
import { FederationsService } from 'src/models/admin/federations/federations.service';
import { HealthCareDepartmentEntity } from 'src/models/admin/health-care-departments/entities/health-care-department.entity';
import { HealthCareDepartmentsService } from 'src/models/admin/health-care-departments/health-care-departments.service';

@Injectable()
export class FederationPageService {
  constructor(
    private readonly fSports: FederationSportsService,
    private readonly federation: FederationsService,
    private readonly fTrainers: FederationTrainersService,
    private readonly fathletes: FederationAthleteService,
    private readonly hcdepartments: HealthCareDepartmentsService,
  ) {}

  async findFederations(): Promise<FederationsEntity[]> {
    return this.federation.findAll({ orderBy: { updatedAt: 'asc' } });
  }

  async findAllFederationSports(): Promise<FederationSportEntity[]> {
    return this.fSports.findAll({
      include: {
        federation: { select: { id: true, nameTm: true, nameRu: true } },
      },
    });
  }

  async findAllFederationTrainers(): Promise<FederationTrainerEntity[]> {
    return this.fTrainers.findAll({
      include: {
        federation: { select: { id: true, nameTm: true, nameRu: true } },
      },
    });
  }

  async findAllFederationAthletes(): Promise<FederationAthleteEntity[]> {
    return this.fathletes.findAll({
      include: {
        federation: { select: { id: true, nameTm: true, nameRu: true } },
      },
    });
  }

  async findAllDepartmentsAndEmployees(): Promise<HealthCareDepartmentEntity[]> {
    return this.hcdepartments.findAll({
      include: { employees: true },
    });
  }
}
