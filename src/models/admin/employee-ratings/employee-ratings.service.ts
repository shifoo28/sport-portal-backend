import { Injectable } from '@nestjs/common';
import { CreateEmployeeRatingDto } from './dto/create-employee-rating.dto';
import { UpdateEmployeeRatingDto } from './dto/update-employee-rating.dto';
import { FindAllEmployeeRatingsDto } from './dto/find-employee-rating.dto';
import { PrismaService } from 'src/prisma.service';
import { EmployeeRatingEntity } from './entities/employee-rating.entity';

@Injectable()
export class EmployeeRatingsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateEmployeeRatingDto): Promise<EmployeeRatingEntity> {
    const { userId, employeeId, rating, comment } = data;

    return this.prismaService.employeeRatings.create({
      data: {
        user: { connect: { id: userId } },
        employee: { connect: { id: employeeId } },
        rating: +rating,
        comment,
      },
    });
  }

  async findAll(
    query: FindAllEmployeeRatingsDto,
  ): Promise<EmployeeRatingEntity[]> {
    return this.prismaService.employeeRatings.findMany(query);
  }

  async findOne(id: string): Promise<EmployeeRatingEntity> {
    return this.prismaService.employeeRatings.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: UpdateEmployeeRatingDto,
  ): Promise<EmployeeRatingEntity> {
    const { employeeId, rating, comment } = data;

    return this.prismaService.employeeRatings.update({
      where: { id },
      data: {
        employee: employeeId && { connect: { id: employeeId } },
        rating: rating && +rating,
        comment,
      },
    });
  }

  async remove(id: string): Promise<EmployeeRatingEntity> {
    return this.prismaService.employeeRatings.delete({ where: { id } });
  }
}
