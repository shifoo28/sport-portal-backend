import { Injectable } from '@nestjs/common';
import { NewsService } from 'src/models/admin/news/news.service';
import {
  FindAllHomeNewsDto,
  FindAllLWNewsDto,
  FindAllVideoNewsDto,
} from './dto/main-page.dto';
import { VideosService } from 'src/models/admin/videos/videos.service';

@Injectable()
export class MainPageService {
  constructor(
    private readonly news: NewsService,
    private readonly videos: VideosService,
  ) {}

  async findAllLWN(params: FindAllHomeNewsDto): Promise<FindAllLWNewsDto[]> {
    const { section, skip, take } = params;

    return this.news.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 30,
      orderBy: { createdAt: 'desc' },
      where: { category: { section } },
      include: {
        category: {
          select: { id: true, nameTm: true, nameRu: true, section: true },
        },
      },
    });
  }

  async findAllVideoN(
    params: FindAllHomeNewsDto,
  ): Promise<FindAllVideoNewsDto[]> {
    const { section, skip, take } = params;

    return this.videos.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 30,
      orderBy: { createdAt: 'desc' },
      where: { category: { section } },
      include: {
        category: {
          select: { id: true, nameTm: true, nameRu: true, section: true },
        },
      },
    });
  }
}
