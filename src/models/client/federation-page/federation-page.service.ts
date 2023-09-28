import { Injectable } from '@nestjs/common';
import { FindAllFederationsDto } from 'src/models/admin/federations/dto/create-federation.dto';
import { FederationsEntity } from 'src/models/admin/federations/entities/federation.entity';
import { FederationsService } from 'src/models/admin/federations/federations.service';
import { FindAllHealthCareDepartment } from 'src/models/admin/health-care-departments/dto/create-health-care-department.dto';
import { HealthCareDepartmentEntity } from 'src/models/admin/health-care-departments/entities/health-care-department.entity';
import { HealthCareDepartmentsService } from 'src/models/admin/health-care-departments/health-care-departments.service';
import { strToObj } from 'src/tools/strToObj';

@Injectable()
export class FederationPageService {
  constructor(
    private readonly federation: FederationsService,
    private readonly hcDepartments: HealthCareDepartmentsService,
  ) {}

  async findAllFederationSports(
    query: FindAllFederationsDto,
  ): Promise<FederationsEntity[]> {
    const { skip, take, where, include, orderBy } = query;

    return this.federation.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      where: where ? strToObj(where) : undefined,
      orderBy: orderBy ? strToObj(orderBy) : { ftrainers: { rating: 'desc' } },
      include: include ? strToObj(include) : { fsports: true },
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

  async findAllFederationAthletes(
    query: FindAllFederationsDto,
  ): Promise<FederationsEntity[]> {
    const { skip, take, where, include, orderBy } = query;

    return this.federation.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      where: where ? strToObj(where) : undefined,
      orderBy: orderBy ? strToObj(orderBy) : { ftrainers: { rating: 'desc' } },
      include: include ? strToObj(include) : { fathlete: true },
    });
  }

  async findAllDepartmentsAndEmployees(
    query: FindAllHealthCareDepartment,
  ): Promise<HealthCareDepartmentEntity[]> {
    const { skip, take, where, include, orderBy } = query;

    return this.hcDepartments.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      where: where ? strToObj(where) : undefined,
      orderBy: orderBy ? strToObj(orderBy) : undefined,
      include: include ? strToObj(include) : { employees: true },
    });
  }
}
