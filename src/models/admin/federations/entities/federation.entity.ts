import { Federations } from '@prisma/client';

export class FederationsEntity implements Federations {
  id: string;
  nameTm: string;
  nameRu: string;
  imagePath: string;
  createdAt: Date;
  updatedAt: Date;
}
