import { Injectable } from '@nestjs/common';
import {
  CreateFederationGymsAndClubDto,
  FindAllFederationGymsAndClubs,
} from './dto/create-federation-gyms-and-club.dto';
import { UpdateFederationGymsAndClubDto } from './dto/update-federation-gyms-and-club.dto';
import { PrismaService } from 'src/prisma.service';
import { FederationGymsAndClubEntity } from './entities/federation-gyms-and-club.entity';

@Injectable()
export class FederationGymsAndClubsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    data: CreateFederationGymsAndClubDto,
  ): Promise<FederationGymsAndClubEntity> {
    const {
      nameTm,
      nameRu,
      latitude,
      longitude,
      tel,
      email,
      link,
      locationTm,
      locationRu,
      sportsTm,
      sportsRu,
      openAtTm,
      openAtRu,
      imagePath1,
      imagePath2,
      imagePath3,
      imagePath4,
      imagePath5,
    } = data;
    return this.prismaService.federationGymsAndClubs.create({
      data: {
        latitude: +latitude,
        longitude: +longitude,
        nameTm,
        nameRu,
        email,
        link,
        locationTm,
        locationRu,
        tel,
        sportsTm,
        sportsRu,
        openAtTm,
        openAtRu,
        imagePath1,
        imagePath2,
        imagePath3,
        imagePath4,
        imagePath5,
      },
    });
  }

  async findAll(
    query: FindAllFederationGymsAndClubs,
  ): Promise<FederationGymsAndClubEntity[]> {
    return this.prismaService.federationGymsAndClubs.findMany(query);
  }

  async findOne(id: string): Promise<FederationGymsAndClubEntity> {
    return this.prismaService.federationGymsAndClubs.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    data: UpdateFederationGymsAndClubDto,
  ): Promise<FederationGymsAndClubEntity> {
    const {
      nameTm,
      nameRu,
      latitude,
      longitude,
      tel,
      email,
      link,
      views,
      locationTm,
      locationRu,
      sportsTm,
      sportsRu,
      openAtTm,
      openAtRu,
      imagePath1,
      imagePath2,
      imagePath3,
      imagePath4,
      imagePath5,
    } = data;
    return this.prismaService.federationGymsAndClubs.update({
      where: { id },
      data: {
        views: views && +views,
        latitude: latitude && +latitude,
        longitude: longitude && +longitude,
        nameTm,
        nameRu,
        tel,
        email,
        link,
        locationTm,
        locationRu,
        sportsTm,
        sportsRu,
        openAtTm,
        openAtRu,
        imagePath1,
        imagePath2,
        imagePath3,
        imagePath4,
        imagePath5,
      },
    });
  }

  async remove(id: string): Promise<FederationGymsAndClubEntity> {
    return this.prismaService.federationGymsAndClubs.delete({ where: { id } });
  }
}
