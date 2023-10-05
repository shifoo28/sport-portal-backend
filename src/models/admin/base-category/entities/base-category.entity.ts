import { BaseCategory } from '@prisma/client';

export class BaseCategoryEntity implements BaseCategory {
  id: string;
  nameTm: string;
  nameRu: string;
  createdAt: Date;
  updatedAt: Date;
}
