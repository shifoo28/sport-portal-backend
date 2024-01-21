import { Injectable } from '@nestjs/common';
import { CreateSportEnvironmentDto } from './dto/create-sport-environment.dto';
import { UpdateSportEnvironmentDto } from './dto/update-sport-environment.dto';
import { PrismaService } from 'src/prisma.service';
import { SportEnvironmentEntity } from './entities/sport-environment.entity';
import { FindAllSportEnvironmentsDto } from './dto/find-sport-environment.dto';

@Injectable()
export class SportEnvironmentsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    data: CreateSportEnvironmentDto,
  ): Promise<SportEnvironmentEntity> {
    return this.prismaService.sportEnvironment.create({ data });
  }

  async findAll(
    query: FindAllSportEnvironmentsDto,
  ): Promise<SportEnvironmentEntity[]> {
    return this.prismaService.sportEnvironment.findMany(query);
  }

  async findOne(id: string): Promise<SportEnvironmentEntity> {
    return this.prismaService.sportEnvironment.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: UpdateSportEnvironmentDto,
  ): Promise<SportEnvironmentEntity> {
    return this.prismaService.sportEnvironment.update({ where: { id }, data });
  }

  async remove(id: string): Promise<SportEnvironmentEntity> {
    return this.prismaService.sportEnvironment.delete({ where: { id } });
  }
}
