import { Injectable } from '@nestjs/common';
import { VideoCategory } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateVideoCategoryDto } from './dto/create-video-category.dto';
import { UpdateVideoCategoryDto } from './dto/update-video-category.dto';
import { FindAllVideoCategory } from './dto/video-category.dto';

@Injectable()
export class VideoCategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateVideoCategoryDto): Promise<VideoCategory> {
    return this.prismaService.videoCategory.create({ data });
  }

  async findAll(param: FindAllVideoCategory): Promise<VideoCategory[]> {
    const { skip, take = 10 } = param;
    return this.prismaService.videoCategory.findMany({ skip, take });
  }

  async findOne(id: number): Promise<VideoCategory> {
    return this.prismaService.videoCategory.findUnique({ where: { id } });
  }

  async update(
    id: number,
    data: UpdateVideoCategoryDto,
  ): Promise<VideoCategory> {
    return this.prismaService.videoCategory.update({ where: { id }, data });
  }

  async remove(id: number): Promise<VideoCategory> {
    return this.prismaService.videoCategory.delete({ where: { id } });
  }
}
