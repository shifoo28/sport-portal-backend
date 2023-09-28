import { Injectable } from '@nestjs/common';
import { FederationAthleteEntity } from 'src/models/admin/federation-athlete/entities/federation-athlete.entity';
import { FederationAthleteService } from 'src/models/admin/federation-athlete/federation-athlete.service';
import { FederationSportEntity } from 'src/models/admin/federation-sports/entities/federation-sport.entity';
import { FederationSportsService } from 'src/models/admin/federation-sports/federation-sports.service';
import { FindAllFederationTrainersDto } from 'src/models/admin/federation-trainers/dto/create-federation-trainer.dto';
import { FederationTrainerEntity } from 'src/models/admin/federation-trainers/entities/federation-trainer.entity';
import { FederationTrainersService } from 'src/models/admin/federation-trainers/federation-trainers.service';
import { FindAllFederationsDto } from 'src/models/admin/federations/dto/create-federation.dto';
import { FederationsEntity } from 'src/models/admin/federations/entities/federation.entity';
import { FederationsService } from 'src/models/admin/federations/federations.service';
import { HealthCareDepartmentEntity } from 'src/models/admin/health-care-departments/entities/health-care-department.entity';
import { HealthCareDepartmentsService } from 'src/models/admin/health-care-departments/health-care-departments.service';
import { strToObj } from 'src/tools/strToObj';

@Injectable()
export class FederationPageService {
  constructor(
    private readonly fSports: FederationSportsService,
    private readonly federation: FederationsService,
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

  async findAllFederationTrainers(
    query: FindAllFederationsDto,
  ): Promise<FederationsEntity[]> {
    const { skip, take, where, include, orderBy } = query;

    return this.federation.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      where: where ? strToObj(where) : undefined,
      orderBy: orderBy ? strToObj(orderBy) : { ftrainers: { rating: 'desc' } },
      include: include ? strToObj(include) : { ftrainers: true },
    });
  }

  async findAllFederationAthletes(): Promise<FederationAthleteEntity[]> {
    return this.fathletes.findAll({
      include: {
        federation: { select: { id: true, nameTm: true, nameRu: true } },
      },
    });
  }

  async findAllDepartmentsAndEmployees(): Promise<
    HealthCareDepartmentEntity[]
  > {
    return this.hcdepartments.findAll({
      include: { employees: true },
    });
  }
}
