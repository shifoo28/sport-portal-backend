import { Injectable } from '@nestjs/common';
import { News } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { FindAllNewsDto } from './dto/news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Injectable()
export class NewsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateNewsDto): Promise<News> {
    const {
      categoryId,
      imagePath,
      locationTm,
      locationRu,
      nameRu,
      nameTm,
      textTm,
      textRu,
    } = data;

    return this.prismaService.news.create({
      data: {
        imagePath,
        locationTm,
        locationRu,
        nameRu,
        nameTm,
        textTm,
        textRu,
        category: { connect: { id: categoryId } },
      },
    });
  }

  async findAll({
    skip,
    take,
    where,
    include,
    orderBy,
  }: FindAllNewsDto): Promise<News[]> {
    return this.prismaService.news.findMany({
      skip,
      take,
      where,
      orderBy,
      include,
    });
  }

  async findOne(id: string): Promise<News> {
    return this.prismaService.news.findUnique({
      where: { id },
      include: { category: true },
    });
  }

  async update(id: string, data: UpdateNewsDto): Promise<News> {
    const {
      categoryId,
      imagePath,
      locationTm,
      locationRu,
      nameRu,
      nameTm,
      textTm,
      textRu,
      views,
    } = data;

    return this.prismaService.news.update({
      where: { id },
      data: {
        imagePath,
        locationTm,
        locationRu,
        nameRu,
        nameTm,
        textTm,
        textRu,
        views,
        category: categoryId && { connect: { id: categoryId } },
      },
    });
  }

  async remove(id: string): Promise<News> {
    return this.prismaService.news.delete({ where: { id } });
  }
}
