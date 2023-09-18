import { ShopCategories } from '@prisma/client';

export class ShopCategoryEntity implements ShopCategories {
  id: string;
  nameTm: string;
  nameRu: string;
  parentId: string;
  createdAt: Date;
  updatedAt: Date;
}
