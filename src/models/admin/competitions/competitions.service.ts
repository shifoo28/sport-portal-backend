import { Injectable } from '@nestjs/common';
import { CreateCompetitionDto } from './dto/create-competition.dto';
import { UpdateCompetitionDto } from './dto/update-competition.dto';
import { PrismaService } from 'src/prisma.service';
import { CompetitionEntity } from './entities/competition.entity';
import { FindAllCompetitionsDto } from './dto/find-competitions.dto';

@Injectable()
export class CompetitionsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateCompetitionDto): Promise<CompetitionEntity> {
    const {
      nameTm,
      nameRu,
      textTm,
      textRu,
      locationTm,
      locationRu,
      startDate,
      endDate,
      imagePath,
      typeId,
    } = data;

    return this.prismaService.competitions.create({
      data: {
        nameTm,
        nameRu,
        textTm,
        textRu,
        locationTm,
        locationRu,
        startDate,
        endDate,
        imagePath,
        competitionType: { connect: { id: typeId } },
      },
    });
  }

  async findAll(query: FindAllCompetitionsDto): Promise<CompetitionEntity[]> {
    return this.prismaService.competitions.findMany(query);
  }

  async findOne(id: string): Promise<CompetitionEntity> {
    return this.prismaService.competitions.findUnique({
      where: { id },
      include: { competitionType: true },
    });
  }

  async update(
    id: string,
    data: UpdateCompetitionDto,
  ): Promise<CompetitionEntity> {
    const {
      nameTm,
      nameRu,
      textTm,
      textRu,
      locationTm,
      locationRu,
      startDate,
      endDate,
      imagePath,
      views,
      typeId,
    } = data;

    return this.prismaService.competitions.update({
      where: { id },
      data: {
        nameTm,
        nameRu,
        textTm,
        textRu,
        locationTm,
        locationRu,
        startDate,
        endDate,
        imagePath,
        views,
        competitionType: typeId && { connect: { id: typeId } },
      },
    });
  }

  async remove(id: string): Promise<CompetitionEntity> {
    return this.prismaService.competitions.delete({ where: { id } });
  }
}
