import { SportTypes } from '@prisma/client';

export class SportTypeEntity implements SportTypes {
  id: string;
  nameTm: string;
  nameRu: string;
  createdAt: Date;
  updatedAt: Date;
}
