import { Injectable } from '@nestjs/common';
import {
  CreateFederationSportDto,
  FindAllFederationSportsDto,
} from './dto/create-federation-sport.dto';
import { UpdateFederationSportDto } from './dto/update-federation-sport.dto';
import { FederationSportEntity } from './entities/federation-sport.entity';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FederationSportsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateFederationSportDto): Promise<FederationSportEntity> {
    const {
      leaderTm,
      leaderRu,
      locationTm,
      locationRu,
      presidentTm,
      presidentRu,
      fax,
      tel,
      web,
      email,
      leader,
      founded,
      location,
      president,
      federationId,
    } = data;
    return this.prismaService.federationSports.create({
      data: {
        founded: +founded,
        leaderTm,
        leaderRu,
        locationTm,
        locationRu,
        presidentTm,
        presidentRu,
        fax,
        tel,
        web,
        email,
        leader,
        location,
        president,
        federation: { connect: { id: federationId } },
      },
    });
  }

  async findAll(
    query: FindAllFederationSportsDto,
  ): Promise<FederationSportEntity[]> {
    return this.prismaService.federationSports.findMany(query);
  }

  async findOne(id: string): Promise<FederationSportEntity> {
    return this.prismaService.federationSports.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: UpdateFederationSportDto,
  ): Promise<FederationSportEntity> {
    const {
      leaderTm,
      leaderRu,
      locationTm,
      locationRu,
      presidentTm,
      presidentRu,
      fax,
      tel,
      web,
      email,
      leader,
      founded,
      location,
      president,
      federationId,
    } = data;
    return this.prismaService.federationSports.update({
      where: { id },
      data: {
        founded: founded && +founded,
        leaderTm,
        leaderRu,
        locationTm,
        locationRu,
        presidentTm,
        presidentRu,
        fax,
        tel,
        web,
        email,
        leader,
        location,
        president,
        federation: federationId && {
          connect: { id: federationId },
        },
      },
    });
  }

  async remove(id: string): Promise<FederationSportEntity> {
    return this.prismaService.federationSports.delete({ where: { id } });
  }
}
