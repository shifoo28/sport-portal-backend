import { Injectable } from '@nestjs/common';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { UpdateChampionshipDto } from './dto/update-championship.dto';
import { PrismaService } from 'src/prisma.service';
import { ChampionshipEntity } from './entities/championship.entity';
import { FindAllChampionships } from './dto/find-championship.dto';

@Injectable()
export class ChampionshipsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateChampionshipDto): Promise<ChampionshipEntity> {
    const { nameTm, nameRu, imagePath, federationId } = data;

    return this.prismaService.championships.create({
      data: {
        nameTm,
        nameRu,
        imagePath,
        federation: { connect: { id: federationId } },
      },
    });
  }

  async findAll({
    skip,
    take,
    where,
    include,
    orderBy,
  }: FindAllChampionships): Promise<ChampionshipEntity[]> {
    return this.prismaService.championships.findMany({
      skip,
      take,
      where,
      include,
      orderBy,
    });
  }

  async findOne(id: string): Promise<ChampionshipEntity> {
    return this.prismaService.championships.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: UpdateChampionshipDto,
  ): Promise<ChampionshipEntity> {
    const { nameTm, nameRu, imagePath, federationId } = data;

    return this.prismaService.championships.update({
      where: { id },
      data: {
        nameTm,
        nameRu,
        imagePath,
        federation: federationId && { connect: { id: federationId } },
      },
    });
  }

  async remove(id: string): Promise<ChampionshipEntity> {
    return this.prismaService.championships.delete({ where: { id } });
  }
}
