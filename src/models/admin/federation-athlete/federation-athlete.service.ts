import { Injectable } from '@nestjs/common';
import { CreateFederationAthleteDto } from './dto/create-federation-athlete.dto';
import { UpdateFederationAthleteDto } from './dto/update-federation-athlete.dto';
import { FederationAthleteEntity } from './entities/federation-athlete.entity';
import { PrismaService } from 'src/prisma.service';
import { FindAllFederationAthleteDto } from './dto/find-federation-athletes.dto';

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
      birthday,
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
        birthday,
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
    return this.prismaService.federationAthlete.findUnique({
      where: { id },
      include: { federation: true, athleteRatings: true },
    });
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
      birthday,
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
        birthday,
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
