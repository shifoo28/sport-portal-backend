import { Injectable } from '@nestjs/common';
import {
  CreateFederationDto,
  FindAllFederationsDto,
} from './dto/create-federation.dto';
import { PrismaService } from 'src/prisma.service';
import { FederationsEntity } from './entities/federation.entity';
import { UpdateFederationDto } from './dto/update-federation.dto';

@Injectable()
export class FederationsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateFederationDto): Promise<FederationsEntity> {
    return this.prismaService.federations.create({ data });
  }

  async findAll(query: FindAllFederationsDto): Promise<FederationsEntity[]> {
    const {
      skip,
      take,
      where,
      orderBy,
      include,
    } = query;

    return this.prismaService.federations.findMany({
      skip,
      take,
      where,
      orderBy,
      include,
    });
  }

  async findOne(id: string): Promise<FederationsEntity> {
    return this.prismaService.federations.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: UpdateFederationDto,
  ): Promise<FederationsEntity> {
    return this.prismaService.federations.update({ where: { id }, data });
  }

  async remove(id: string): Promise<FederationsEntity> {
    return this.prismaService.federations.delete({ where: { id } });
  }
}
