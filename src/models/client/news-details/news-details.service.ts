import { Injectable } from '@nestjs/common';
import { NewsEntity } from 'src/models/admin/news/entities/news.entity';
import { NewsService } from 'src/models/admin/news/news.service';

@Injectable()
export class NewsDetailsService {
  constructor(private readonly news: NewsService) {}

  async updateViewsByOne(id: string, categoryId: string): Promise<NewsEntity> {
    return this.news.update(id, {
      views: { increment: 1 },
      categoryId,
    });
  }
}
