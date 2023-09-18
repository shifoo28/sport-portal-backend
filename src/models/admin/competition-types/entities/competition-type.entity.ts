import { CompetitionTypes } from '@prisma/client';

export class CompetitionTypeEntity implements CompetitionTypes {
  id: number;
  nameTm: string;
  nameRu: string;
  createdAt: Date;
  updatedAt: Date;
}
