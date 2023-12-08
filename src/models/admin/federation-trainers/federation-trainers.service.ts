import { Injectable } from '@nestjs/common';
import {
  CreateFederationTrainerDto,
  FindAllFederationTrainersDto,
} from './dto/create-federation-trainer.dto';
import { UpdateFederationTrainerDto } from './dto/update-federation-trainer.dto';
import { FederationTrainerEntity } from './entities/federation-trainer.entity';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FederationTrainersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    data: CreateFederationTrainerDto,
  ): Promise<FederationTrainerEntity> {
    const {
      nameTm,
      nameRu,
      jobTm,
      jobRu,
      birthPlaceTm,
      birthPlaceRu,
      links,
      madeTm,
      madeRu,
      sportLevelTm,
      sportLevelRu,
      badgesTm,
      badgesRu,
      workedAtTm,
      workedAtRu,
      age,
      imagePath,
      experience,
      federationId,
    } = data;

    return this.prismaService.federationTrainers.create({
      data: {
        age: +age,
        experience: +experience,
        nameTm,
        nameRu,
        jobTm,
        jobRu,
        birthPlaceTm,
        birthPlaceRu,
        links,
        madeTm,
        madeRu,
        sportLevelTm,
        sportLevelRu,
        badgesTm,
        badgesRu,
        workedAtTm,
        workedAtRu,
        imagePath,
        federation: { connect: { id: federationId } },
      },
    });
  }

  async findAll(
    query: FindAllFederationTrainersDto,
  ): Promise<FederationTrainerEntity[]> {
    return this.prismaService.federationTrainers.findMany(query);
  }

  async findOne(id: string): Promise<FederationTrainerEntity> {
    return this.prismaService.federationTrainers.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: UpdateFederationTrainerDto,
  ): Promise<FederationTrainerEntity> {
    const {
      nameTm,
      nameRu,
      jobTm,
      jobRu,
      birthPlaceTm,
      birthPlaceRu,
      links,
      madeTm,
      madeRu,
      sportLevelTm,
      sportLevelRu,
      badgesTm,
      badgesRu,
      workedAtTm,
      workedAtRu,
      age,
      rating,
      imagePath,
      experience,
      federationId,
    } = data;

    return this.prismaService.federationTrainers.update({
      where: { id },
      data: {
        age: age && +age,
        rating: rating && +rating,
        experience: experience && +experience,
        nameTm,
        nameRu,
        jobTm,
        jobRu,
        birthPlaceTm,
        birthPlaceRu,
        links,
        madeTm,
        madeRu,
        sportLevelTm,
        sportLevelRu,
        badgesTm,
        badgesRu,
        workedAtTm,
        workedAtRu,
        imagePath,
        federation: federationId && { connect: { id: federationId } },
      },
    });
  }

  async remove(id: string): Promise<FederationTrainerEntity> {
    return this.prismaService.federationTrainers.delete({ where: { id } });
  }
}
