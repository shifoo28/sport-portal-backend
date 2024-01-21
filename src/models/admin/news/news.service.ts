import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { FindAllNewsDto } from './dto/news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { NewsEntity } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateNewsDto): Promise<NewsEntity> {
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
  }: FindAllNewsDto): Promise<NewsEntity[]> {
    return this.prismaService.news.findMany({
      skip,
      take,
      where,
      orderBy,
      include,
    });
  }

  async findOne(id: string): Promise<NewsEntity> {
    return this.prismaService.news.findUnique({
      where: { id },
      include: { category: true },
    });
  }

  async update(id: string, data: UpdateNewsDto): Promise<NewsEntity> {
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

  async remove(id: string): Promise<NewsEntity> {
    return this.prismaService.news.delete({ where: { id } });
  }
}
