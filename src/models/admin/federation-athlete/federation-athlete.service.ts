import { Injectable } from '@nestjs/common';
import {
  CreateFederationAthleteDto,
  FindAllFederationAthleteDto,
} from './dto/create-federation-athlete.dto';
import { UpdateFederationAthleteDto } from './dto/update-federation-athlete.dto';
import { FederationAthleteEntity } from './entities/federation-athlete.entity';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FederationAthleteService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    data: CreateFederationAthleteDto,
  ): Promise<FederationAthleteEntity> {
    const {
      nameTm,
      nameRu,
      madeTm,
      madeRu,
      badgesTm,
      badgesRu,
      birthPlaceTm,
      birthPlaceRu,
      positionTm,
      positionRu,
      workedAtTm,
      workedAtRu,
      sportLevelTm,
      sportLevelRu,
      age,
      jobTm,
      jobRu,
      club,
      links,
      imagePath,
      federationId,
      experience,
    } = data;
    return this.prismaService.federationAthlete.create({
      data: {
        age: +age,
        experience: +experience,
        nameTm,
        nameRu,
        madeTm,
        madeRu,
        badgesTm,
        badgesRu,
        birthPlaceTm,
        birthPlaceRu,
        positionTm,
        positionRu,
        workedAtTm,
        workedAtRu,
        sportLevelTm,
        sportLevelRu,
        club,
        jobTm,
        jobRu,
        links,
        imagePath,
        federation: { connect: { id: federationId } },
      },
    });
  }

  async findAll(
    query: FindAllFederationAthleteDto,
  ): Promise<FederationAthleteEntity[]> {
    return this.prismaService.federationAthlete.findMany(query);
  }

  async findOne(id: string): Promise<FederationAthleteEntity> {
    return this.prismaService.federationAthlete.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: UpdateFederationAthleteDto,
  ): Promise<FederationAthleteEntity> {
    const {
      nameTm,
      nameRu,
      madeTm,
      madeRu,
      badgesTm,
      badgesRu,
      birthPlaceTm,
      birthPlaceRu,
      positionTm,
      positionRu,
      workedAtTm,
      workedAtRu,
      sportLevelTm,
      sportLevelRu,
      age,
      views,
      jobTm,
      jobRu,
      club,
      rating,
      imagePath,
      federationId,
      experience,
    } = data;

    return this.prismaService.federationAthlete.update({
      where: { id },
      data: {
        age: age && +age,
        rating: rating && +rating,
        experience: experience && +experience,
        nameTm,
        nameRu,
        madeTm,
        madeRu,
        badgesTm,
        badgesRu,
        birthPlaceTm,
        birthPlaceRu,
        positionTm,
        positionRu,
        workedAtTm,
        workedAtRu,
        sportLevelTm,
        sportLevelRu,
        club,
        views,
        jobTm,
        jobRu,
        imagePath,
        federation: federationId && { connect: { id: federationId } },
      },
    });
  }

  async remove(id: string): Promise<FederationAthleteEntity> {
    return this.prismaService.federationAthlete.delete({ where: { id } });
  }
}
