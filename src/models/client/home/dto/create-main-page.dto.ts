import { News, Videos } from '@prisma/client';

export class FindAllLWNewsDto implements News {
  id: string;
  textTm: string;
  textRu: string;
  views: number;
  nameTm: string;
  nameRu: string;
  location: string;
  imagePath: string;
  categoryId: string;
  category?: { nameTm: string; nameRu: string };
  createdAt: Date;
  updatedAt: Date;
}

export class FindAllVideoNewsDto implements Videos {
  id: string;
  views: number;
  nameTm: string;
  nameRu: string;
  imagePath: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
  videoPath: string;
}
