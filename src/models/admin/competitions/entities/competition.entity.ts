import { Competitions } from '@prisma/client';

export class CompetitionEntity implements Competitions {
  id: string;
  nameTm: string;
  nameRu: string;
  textTm: string;
  textRu: string;
  venueId: string;
  locationTm: string;
  locationRu: string;
  startDate: Date;
  endDate: Date;
  views: number;
  imagePath: string;
  typeId: number;
  createdAt: Date;
  updatedAt: Date;
}
