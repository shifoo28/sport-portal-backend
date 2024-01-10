import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { PrismaService } from 'src/prisma.service';
import { VideoEntity } from './entities/video.entity';
import FindAllVideosDto from './dto/videos.dto';

@Injectable()
export class VideosService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateVideoDto): Promise<VideoEntity> {
    const { categoryId, imagePath, nameRu, nameTm, textTm, textRu, videoPath } =
      data;

    return this.prismaService.videos.create({
      data: {
        nameRu,
        nameTm,
        textTm,
        textRu,
        imagePath,
        videoPath,
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
  }: FindAllVideosDto): Promise<VideoEntity[]> {
    return this.prismaService.videos.findMany({
      skip,
      take,
      where,
      orderBy,
      include,
    });
  }

  async findOne(id: string): Promise<VideoEntity> {
    return this.prismaService.videos.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateVideoDto): Promise<VideoEntity> {
    const {
      categoryId,
      imagePath,
      nameRu,
      nameTm,
      textTm,
      textRu,
      videoPath,
      views,
    } = data;

    return this.prismaService.videos.update({
      data: {
        nameRu,
        nameTm,
        textTm,
        textRu,
        views,
        imagePath,
        videoPath,
        category: categoryId && { connect: { id: categoryId } },
      },
      where: { id },
    });
  }

  async remove(id: string): Promise<VideoEntity> {
    return this.prismaService.videos.delete({ where: { id } });
  }
}
