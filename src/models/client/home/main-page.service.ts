import { Injectable } from '@nestjs/common';
import { NewsService } from 'src/models/admin/news/news.service';
import {
  FindAllHomeNewsDto,
  FindAllLWNewsDto,
  FindAllVideoNewsDto,
} from './dto/main-page.dto';
import { VideosService } from 'src/models/admin/videos/videos.service';
import { ChampionshipEntity } from 'src/models/admin/championships/entities/championship.entity';
import { ChampionshipsService } from 'src/models/admin/championships/championships.service';
import { $Enums } from '@prisma/client';

@Injectable()
export class MainPageService {
  constructor(
    private readonly news: NewsService,
    private readonly videos: VideosService,
    private readonly championshipsService: ChampionshipsService,
  ) {}

  async findAllLWN(query: FindAllHomeNewsDto): Promise<FindAllLWNewsDto[]> {
    const { section, skip, take } = query;

    return this.news.findAll({
      skip: skip && +skip,
      take: (take && +take) || 30,
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
    query: FindAllHomeNewsDto,
  ): Promise<FindAllVideoNewsDto[]> {
    const { section, skip, take } = query;

    return this.videos.findAll({
      skip: skip && +skip,
      take: (take && +take) || 30,
      orderBy: { createdAt: 'desc' },
      where: { category: { section } },
      include: {
        category: {
          select: { id: true, nameTm: true, nameRu: true, section: true },
        },
      },
    });
  }

  async findTeams(type: $Enums.Statistics): Promise<ChampionshipEntity[]> {
    return this.championshipsService.findAll({
      where: { type },
      include: {
        team: {
          orderBy: [
            { points: 'desc' },
            { win: 'desc' },
            { goalsScored: 'desc' },
          ],
        },
      },
    });
  }
}
