import { Injectable } from '@nestjs/common';
import { CreateSportCategoryDto } from './dto/create-sport-category.dto';
import { UpdateSportCategoryDto } from './dto/update-sport-category.dto';
import { PrismaService } from 'src/prisma.service';
import { SportCategoryEntity } from './entities/sport-category.entity';
import { FindAllSportCategoriesDto } from './dto/sport-category.dto';

@Injectable()
export class SportCategoriesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateSportCategoryDto): Promise<SportCategoryEntity> {
    const [sportCategories] = await this.prismaService.$transaction([
      this.prismaService.sportCategories.create({
        data: { nameRu: data.nameRu, nameTm: data.nameTm, section: 'Local' },
      }),
      this.prismaService.sportCategories.create({
        data: { nameRu: data.nameRu, nameTm: data.nameTm, section: 'Video' },
      }),
      this.prismaService.sportCategories.create({
        data: { nameRu: data.nameRu, nameTm: data.nameTm, section: 'World' },
      }),
    ]);

    return sportCategories;
  }

  async findAll({
    skip,
    take,
    where,
    include,
    orderBy,
  }: FindAllSportCategoriesDto): Promise<SportCategoryEntity[]> {
    return this.prismaService.sportCategories.findMany({
      skip,
      take,
      where,
      include,
      orderBy,
    });
  }

  async findOne(id: string): Promise<SportCategoryEntity> {
    return this.prismaService.sportCategories.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: UpdateSportCategoryDto,
  ): Promise<SportCategoryEntity> {
    return this.prismaService.sportCategories.update({ where: { id }, data });
  }

  async remove(id: string): Promise<SportCategoryEntity> {
    return this.prismaService.sportCategories.delete({ where: { id } });
  }
}
