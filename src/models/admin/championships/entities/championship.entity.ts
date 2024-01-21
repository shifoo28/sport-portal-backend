import { Championships } from '@prisma/client';

export class ChampionshipEntity implements Championships {
  id: string;
  nameTm: string;
  nameRu: string;
  imagePath: string;
  federationId: string;
  createdAt: Date;
  updatedAt: Date;
}
