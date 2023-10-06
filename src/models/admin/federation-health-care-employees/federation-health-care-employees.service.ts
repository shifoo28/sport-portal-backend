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
      nameTm,
      nameRu,
      jobTm,
      jobRu,
      workAtTm,
      workAtRu,
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
        age: +age,
        views: +views,
        rating: +rating,
        experience: +experience,
        nameTm,
        nameRu,
        jobTm,
        jobRu,
        workAtTm,
        workAtRu,
        name,
        job,
        workAt,
        imagePath,
        links,
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
      include: { department: true },
    });
  }

  async update(
    id: string,
    data: UpdateFederationHealthCareEmployeeDto,
  ): Promise<FederationHealthCareEmployeeEntity> {
    const {
      nameTm,
      nameRu,
      jobTm,
      jobRu,
      workAtTm,
      workAtRu,
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

    return this.prismaService.federationHealthCareEmployees.update({
      where: { id },
      data: {
        age: age && +age,
        views: views && +views,
        rating: rating && +rating,
        experience: experience && +experience,
        nameTm,
        nameRu,
        jobTm,
        jobRu,
        workAtTm,
        workAtRu,
        name,
        job,
        workAt,
        imagePath,
        links,
        department: departmentId && { connect: { id: departmentId } },
      },
    });
  }

  async remove(id: string): Promise<FederationHealthCareEmployeeEntity> {
    return this.prismaService.federationHealthCareEmployees.delete({
      where: { id },
    });
  }
}
