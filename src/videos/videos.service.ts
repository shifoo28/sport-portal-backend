import { Injectable } from '@nestjs/common';
import { CreateManyVideosDto, CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { PrismaService } from 'src/prisma.service';
import { Video } from './entities/video.entity';
import { FindAllVideosDto } from './dto/videos.dto';

@Injectable()
export class VideosService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateVideoDto): Promise<Video> {
    const { categoryId, imagePath, nameRu, nameTm, videoPath } = data;

    return this.prismaService.videos.create({
      data: {
        imagePath,
        nameRu,
        nameTm,
        videoPath,
        category: { connect: { id: categoryId } },
      },
    });
  }

  async createMany(data: CreateManyVideosDto[]): Promise<object> {
    return this.prismaService.videos.createMany({ data, skipDuplicates: true });
  }

  async findAll(param: FindAllVideosDto): Promise<Video[]> {
    const { take = 10, skip } = param;
    return this.prismaService.videos.findMany({ skip, take });
  }

  async findOne(id: string): Promise<Video> {
    return this.prismaService.videos.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateVideoDto): Promise<Video> {
    const { categoryId, imagePath, nameRu, nameTm, videoPath } = data;

    return this.prismaService.videos.update({
      data: {
        imagePath,
        nameRu,
        nameTm,
        videoPath,
        category: { connect: { id: categoryId } },
      },
      where: { id },
    });
  }

  async remove(id: string): Promise<Video> {
    return this.prismaService.videos.delete({ where: { id } });
  }
}
