import { Sections, SportCategories } from '@prisma/client';

export class SportCategoryEntity implements SportCategories {
  id: string;
  nameTm: string;
  nameRu: string;
  section: Sections;
  createdAt: Date;
  updatedAt: Date;
}
