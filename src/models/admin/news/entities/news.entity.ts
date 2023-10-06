import { News } from '@prisma/client';

export class NewsEntity implements News {
  id: string;
  textTm: string;
  textRu: string;
  views: number;
  nameTm: string;
  nameRu: string;
  locationTm: string;
  locationRu: string;
  imagePath: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
}
