import { Injectable } from '@nestjs/common';
import {
  CreateFederationHealthCareEmployeeDto,
  FindAllFederationHealthCareEmployeesDto,
} from './dto/create-federation-health-care-employee.dto';
import { UpdateFederationHealthCareEmployeeDto } from './dto/update-federation-health-care-employee.dto';
import { PrismaService } from 'src/prisma.service';
import { FederationHealthCareEmployeeEntity } from './entities/federation-health-care-employee.entity';

@Injectable()
export class FederationHealthCareEmployeesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    data: CreateFederationHealthCareEmployeeDto,
  ): Promise<FederationHealthCareEmployeeEntity> {
    const {
      name,
      age,
      job,
      workAt,
      departmentId,
      experience,
      links,
      views,
      rating,
      imagePath,
    } = data;
    return this.prismaService.federationHealthCareEmployees.create({
      data: {
        name,
        job,
        workAt,
        imagePath,
        links,
        age: +age,
        views: +views,
        rating: +rating,
        experience: +experience,
        department: { connect: { id: departmentId } },
      },
    });
  }

  async findAll(
    query: FindAllFederationHealthCareEmployeesDto,
  ): Promise<FederationHealthCareEmployeeEntity[]> {
    return this.prismaService.federationHealthCareEmployees.findMany(query);
  }

  async findOne(id: string): Promise<FederationHealthCareEmployeeEntity> {
    return this.prismaService.federationHealthCareEmployees.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    data: UpdateFederationHealthCareEmployeeDto,
  ): Promise<FederationHealthCareEmployeeEntity> {
    const {} = data;

    return this.prismaService.federationHealthCareEmployees.update({
      where: { id },
      data: {},
    });
  }

  async remove(id: string): Promise<FederationHealthCareEmployeeEntity> {
    return this.prismaService.federationHealthCareEmployees.delete({
      where: { id },
    });
  }
}
