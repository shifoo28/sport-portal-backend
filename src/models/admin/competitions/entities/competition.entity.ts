import { Competitions } from '@prisma/client';

export class CompetitionEntity implements Competitions {
  id: string;
  nameTm: string;
  nameRu: string;
  textTm: string;
  textRu: string;
  location: string;
  views: number;
  imagePath: string;
  typeId: number;
  createdAt: Date;
  updatedAt: Date;
}
