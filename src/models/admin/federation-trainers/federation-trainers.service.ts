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
      madeTm,
      madeRu,
      sportLevelTm,
      sportLevelRu,
      badgesTm,
      badgesRu,
      workedAtTm,
      workedAtRu,
      age,
      job,
      made,
      name,
      rating,
      imagePath,
      birthPlace,
      experience,
      sportLevel,
      badges,
      links,
      workedAt,
      federationId,
    } = data;

    return this.prismaService.federationTrainers.create({
      data: {
        age: +age,
        rating: +rating,
        experience: +experience,
        nameTm,
        nameRu,
        madeTm,
        madeRu,
        sportLevelTm,
        sportLevelRu,
        badgesTm,
        badgesRu,
        workedAtTm,
        workedAtRu,
        job,
        made,
        name,
        links,
        badges,
        workedAt,
        imagePath,
        birthPlace,
        sportLevel,
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
      madeTm,
      madeRu,
      sportLevelTm,
      sportLevelRu,
      badgesTm,
      badgesRu,
      workedAtTm,
      workedAtRu,
      age,
      job,
      made,
      name,
      rating,
      imagePath,
      birthPlace,
      experience,
      sportLevel,
      federationId,
    } = data;

    return this.prismaService.federationTrainers.update({
      where: { id },
      data: {
        age: +age,
        rating: +rating,
        experience: +experience,
        nameTm,
        nameRu,
        madeTm,
        madeRu,
        sportLevelTm,
        sportLevelRu,
        badgesTm,
        badgesRu,
        workedAtTm,
        workedAtRu,
        job,
        made,
        name,
        imagePath,
        birthPlace,
        sportLevel,
        federation: { connect: { id: federationId } },
      },
    });
  }

  async remove(id: string): Promise<FederationTrainerEntity> {
    return this.prismaService.federationTrainers.delete({ where: { id } });
  }
}
