import { Federations } from '@prisma/client';

export class FederationsEntity implements Federations {
  id: string;
  nameTm: string;
  nameRu: string;
  createdAt: Date;
  updatedAt: Date;
}
