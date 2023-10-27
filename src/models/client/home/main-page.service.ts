import { Injectable } from '@nestjs/common';
import { NewsService } from 'src/models/admin/news/news.service';
import {
  FindAllLWNewsDto,
  FindAllVideoNewsDto,
} from './dto/create-main-page.dto';
import { VideosService } from 'src/models/admin/videos/videos.service';

@Injectable()
export class MainPageService {
  constructor(
    private readonly news: NewsService,
    private readonly videos: VideosService,
  ) {}

  async findAllLWN(section: 'Local' | 'World'): Promise<FindAllLWNewsDto[]> {
    return this.news.findAll({
      take: 30,
      orderBy: { createdAt: 'desc' },
      where: { category: { section } },
      include: {
        category: {
          select: { id: true, nameTm: true, nameRu: true, section: true },
        },
      },
    });
  }

  async findAllVideoN(): Promise<FindAllVideoNewsDto[]> {
    return this.videos.findAll({
      take: 10,
      orderBy: { createdAt: 'desc' },
      where: { category: { section: 'Video' } },
      include: {
        category: {
          select: { id: true, nameTm: true, nameRu: true, section: true },
        },
      },
    });
  }
}
