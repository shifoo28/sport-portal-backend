import { Injectable } from '@nestjs/common';
import { FindAllHealthCareDepartment } from 'src/models/admin/health-care-departments/dto/create-health-care-department.dto';
import { HealthCareDepartmentEntity } from 'src/models/admin/health-care-departments/entities/health-care-department.entity';
import { HealthCareDepartmentsService } from 'src/models/admin/health-care-departments/health-care-departments.service';
import { strToObj } from 'src/tools/strToObj';

@Injectable()
export class HcdepartmentPageService {
  constructor(private readonly hcDepartments: HealthCareDepartmentsService) {}

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
