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
    const { club, made, name, rating, position, imagePath, federationId } =
      data;
    return this.prismaService.federationAthlete.create({
      data: {
        club,
        made,
        name,
        rating,
        position,
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
    const { club, made, name, rating, position, imagePath, federationId } =
      data;

    return this.prismaService.federationAthlete.update({
      where: { id },
      data: {
        club,
        made,
        name,
        rating,
        position,
        imagePath,
        federation: { connect: { id: federationId } },
      },
    });
  }

  async remove(id: string): Promise<FederationAthleteEntity> {
    return this.prismaService.federationAthlete.delete({ where: { id } });
  }
}
