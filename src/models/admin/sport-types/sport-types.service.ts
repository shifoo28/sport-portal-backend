import { Injectable } from '@nestjs/common';
import {
  CreateSportTypeDto,
  FindAllSportTypesDto,
} from './dto/create-sport-type.dto';
import { UpdateSportTypeDto } from './dto/update-sport-type.dto';
import { SportTypeEntity } from './entities/sport-type.entity';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SportTypesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateSportTypeDto): Promise<SportTypeEntity> {
    return this.prismaService.sportTypes.create({ data });
  }

  async findAll(query: FindAllSportTypesDto): Promise<SportTypeEntity[]> {
    return this.prismaService.sportTypes.findMany(query);
  }

  async findOne(id: string): Promise<SportTypeEntity> {
    return this.prismaService.sportTypes.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateSportTypeDto): Promise<SportTypeEntity> {
    return this.prismaService.sportTypes.update({ where: { id }, data });
  }

  async remove(id: string): Promise<SportTypeEntity> {
    return this.prismaService.sportTypes.delete({ where: { id } });
  }
}
