import { Videos } from '@prisma/client';

export class Video implements Videos {
  id: string;
  views: number;
  nameTm: string;
  nameRu: string;
  textTm: string;
  textRu: string;
  videoPath: string;
  imagePath: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
}
