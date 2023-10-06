import { Competitions } from '@prisma/client';

export class CompetitionEntity implements Competitions {
  id: string;
  nameTm: string;
  nameRu: string;
  textTm: string;
  textRu: string;
  locationTm: string;
  locationRu: string;
  dateStart: Date;
  dateEnd: Date;
  views: number;
  imagePath: string;
  typeId: number;
  createdAt: Date;
  updatedAt: Date;
}
