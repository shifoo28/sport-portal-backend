import { BaseCategory } from '@prisma/client';

export class BaseCategoryEntity implements BaseCategory {
  id: string;
  nameTm: string;
  nameRu: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
