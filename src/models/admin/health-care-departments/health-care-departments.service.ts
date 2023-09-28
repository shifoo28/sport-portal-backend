import { Injectable } from '@nestjs/common';
import {
  CreateHealthCareDepartmentDto,
  FindAllHealthCareDepartment,
} from './dto/create-health-care-department.dto';
import { UpdateHealthCareDepartmentDto } from './dto/update-health-care-department.dto';
import { HealthCareDepartmentEntity } from './entities/health-care-department.entity';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class HealthCareDepartmentsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    data: CreateHealthCareDepartmentDto,
  ): Promise<HealthCareDepartmentEntity> {
    const { nameRu, nameTm, employees } = data;

    return this.prismaService.healthCareDepartments.create({
      data: { nameRu, nameTm, employees },
    });
  }

  async findAll(
    query: FindAllHealthCareDepartment,
  ): Promise<HealthCareDepartmentEntity[]> {
    const { skip, take, where, orderBy, include } = query;

    return this.prismaService.healthCareDepartments.findMany({
      skip,
      take,
      where,
      orderBy,
      include,
    });
  }

  async findOne(id: string): Promise<HealthCareDepartmentEntity> {
    return this.prismaService.healthCareDepartments.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    data: UpdateHealthCareDepartmentDto,
  ): Promise<HealthCareDepartmentEntity> {
    const { nameTm, nameRu, employees } = data;

    return this.prismaService.healthCareDepartments.update({
      where: { id },
      data: { nameTm, nameRu, employees },
    });
  }

  async remove(id: string): Promise<HealthCareDepartmentEntity> {
    return this.prismaService.healthCareDepartments.delete({ where: { id } });
  }
}
