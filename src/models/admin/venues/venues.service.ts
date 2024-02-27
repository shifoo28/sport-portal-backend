import { Injectable } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { FindAllVenuesDto } from './dto/find-venues.dto';
import { PrismaService } from 'src/prisma.service';
import { VenueEntity } from './entities/venue.entity';

@Injectable()
export class VenuesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateVenueDto): Promise<VenueEntity> {
    const { nameTm, nameRu } = data;

    return this.prismaService.venues.create({ data: { nameTm, nameRu } });
  }

  async findAll(query: FindAllVenuesDto): Promise<VenueEntity[]> {
    return this.prismaService.venues.findMany(query);
  }

  async findOne(id: string): Promise<VenueEntity> {
    return this.prismaService.venues.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateVenueDto): Promise<VenueEntity> {
    const { nameTm, nameRu } = data;

    return this.prismaService.venues.update({
      where: { id },
      data: { nameTm, nameRu },
    });
  }

  async remove(id: string): Promise<VenueEntity> {
    return this.prismaService.venues.delete({ where: { id } });
  }
}
