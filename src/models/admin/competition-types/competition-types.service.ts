import { Injectable } from '@nestjs/common';
import {
  CreateCompetitionTypeDto,
  FindAllCompetitionTypesDto,
} from './dto/create-competition-type.dto';
import { UpdateCompetitionTypeDto } from './dto/update-competition-type.dto';
import { PrismaService } from 'src/prisma.service';
import { CompetitionTypeEntity } from './entities/competition-type.entity';

@Injectable()
export class CompetitionTypesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateCompetitionTypeDto): Promise<CompetitionTypeEntity> {
    const { nameTm, nameRu, competition } = data;

    return this.prismaService.competitionTypes.create({
      data: { nameTm, nameRu, competition },
    });
  }

  async findAll(
    query: FindAllCompetitionTypesDto,
  ): Promise<CompetitionTypeEntity[]> {
    return this.prismaService.competitionTypes.findMany(query);
  }

  async findOne(id: number): Promise<CompetitionTypeEntity> {
    return this.prismaService.competitionTypes.findUnique({ where: { id } });
  }

  async update(
    id: number,
    data: UpdateCompetitionTypeDto,
  ): Promise<CompetitionTypeEntity> {
    const { nameTm, nameRu, competition } = data;

    return this.prismaService.competitionTypes.update({
      where: { id },
      data: { nameTm, nameRu, competition },
    });
  }

  async remove(id: number): Promise<CompetitionTypeEntity> {
    return this.prismaService.competitionTypes.delete({ where: { id } });
  }
}
