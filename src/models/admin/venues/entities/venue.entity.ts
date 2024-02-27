import { Venues } from '@prisma/client';

export class VenueEntity implements Venues {
  id: string;
  nameTm: string;
  nameRu: string;
  createdAt: Date;
  updatedAt: Date;
}
