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
    return this.prismaService.news.create({ data });
  }

  async findAll(param: FindAllNewsDto): Promise<News[]> {
    const { skip, take = 10 } = param;

    return this.prismaService.news.findMany({ skip, take });
  }

  async findOne(id: number): Promise<News> {
    return this.prismaService.news.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateNewsDto): Promise<News> {
    return this.prismaService.news.update({ where: { id }, data });
  }

  async remove(id: number): Promise<News> {
    return this.prismaService.news.delete({ where: { id } });
  }
}
