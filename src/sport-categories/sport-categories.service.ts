import { Injectable } from '@nestjs/common';
import { CreateSportCategoryDto } from './dto/create-sport-category.dto';
import { UpdateSportCategoryDto } from './dto/update-sport-category.dto';
import { PrismaService } from 'src/prisma.service';
import { SportCategory } from './entities/sport-category.entity';
import { FindAllSportCategoriesDto } from './dto/sport-category.dto';

@Injectable()
export class SportCategoriesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateSportCategoryDto): Promise<SportCategory> {
    return this.prismaService.sportCategories.create({ data });
  }

  async findAll(param: FindAllSportCategoriesDto): Promise<SportCategory[]> {
    const { skip, take = 10 } = param;

    return this.prismaService.sportCategories.findMany({ skip, take });
  }

  async findOne(id: string): Promise<SportCategory> {
    return this.prismaService.sportCategories.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: UpdateSportCategoryDto,
  ): Promise<SportCategory> {
    return this.prismaService.sportCategories.update({ where: { id }, data });
  }

  async remove(id: string): Promise<SportCategory> {
    return this.prismaService.sportCategories.delete({ where: { id } });
  }
}
