import { Injectable } from '@nestjs/common';
import { BaseCategory } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { FindAllBaseCategoryDto } from './dto/base-category.dto';
import { CreateBaseCategoryDto } from './dto/create-base-category.dto';
import { UpdateBaseCategoryDto } from './dto/update-base-category.dto';

@Injectable()
export class BaseCategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateBaseCategoryDto): Promise<BaseCategory> {
    return this.prismaService.baseCategory.create({ data });
  }

  async findAll(param: FindAllBaseCategoryDto): Promise<BaseCategory[]> {
    const { skip, take = 10 } = param;

    return this.prismaService.baseCategory.findMany({ skip, take });
  }

  async findOne(id: number): Promise<BaseCategory> {
    return this.prismaService.baseCategory.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateBaseCategoryDto) {
    return this.prismaService.baseCategory.update({ where: { id }, data });
  }

  async remove(id: number): Promise<BaseCategory> {
    return this.prismaService.baseCategory.delete({ where: { id } });
  }
}
