import { Injectable } from '@nestjs/common';
import { NewsCategory } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateNewsCategoryDto } from './dto/create-news-category.dto';
import { FindAllNewsCategoryDto } from './dto/news-category.dto';
import { UpdateNewsCategoryDto } from './dto/update-news-category.dto';

@Injectable()
export class NewsCategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateNewsCategoryDto): Promise<NewsCategory> {
    return this.prismaService.newsCategory.create({ data });
  }

  async findAll(param: FindAllNewsCategoryDto): Promise<NewsCategory[]> {
    const { skip, take = 10 } = param;

    return this.prismaService.newsCategory.findMany({ skip, take });
  }

  async findOne(id: number): Promise<NewsCategory> {
    return this.prismaService.newsCategory.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateNewsCategoryDto): Promise<NewsCategory> {
    return this.prismaService.newsCategory.update({ where: { id }, data });
  }

  async remove(id: number): Promise<NewsCategory> {
    return this.prismaService.newsCategory.delete({ where: { id } });
  }
}
