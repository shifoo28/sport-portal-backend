import { Injectable } from '@nestjs/common';
import { CreateFederationDto } from './dto/create-federation.dto';
import { PrismaService } from 'src/prisma.service';
import { FederationsEntity } from './entities/federation.entity';
import { UpdateFederationDto } from './dto/update-federation.dto';
import { FindAllFederationsDto } from './dto/find-federation.dto';

@Injectable()
export class FederationsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateFederationDto): Promise<FederationsEntity> {
    return this.prismaService.federations.create({ data });
  }

  async findAll(query: FindAllFederationsDto): Promise<FederationsEntity[]> {
    return this.prismaService.federations.findMany(query);
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
