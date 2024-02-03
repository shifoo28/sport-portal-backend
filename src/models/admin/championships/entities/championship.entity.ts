import { $Enums, Championships } from '@prisma/client';

export class ChampionshipEntity implements Championships {
  id: string;
  nameTm: string;
  nameRu: string;
  imagePath: string;
  type: $Enums.Statistics;
  createdAt: Date;
  updatedAt: Date;
}
