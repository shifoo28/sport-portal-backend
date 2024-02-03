import { Teams } from '@prisma/client';

export class TeamEntity implements Teams {
  id: string;
  nameTm: string;
  nameRu: string;
  imagePath: string;
  win: number;
  draw: number;
  loss: number;
  goalsScored: number;
  goalsAgainst: number;
  points: number;
  championshipId: string;
  createdAt: Date;
  updatedAt: Date;
}
