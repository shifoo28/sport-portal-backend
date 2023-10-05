import { FederationTrainers, Prisma } from '@prisma/client';

export class FederationTrainerEntity implements FederationTrainers {
  nameTm: string;
  nameRu: string;
  madeTm: string;
  madeRu: string;
  sportLevelTm: string;
  sportLevelRu: string;
  workedAtTm: string[];
  workedAtRu: string[];
  badgesTm: string[];
  badgesRu: string[];
  views: number;
  workedAt: string[];
  badges: string[];
  links: Prisma.JsonValue;
  id: string;
  age: number;
  job: string;
  name: string;
  made: string;
  rating: number;
  imagePath: string;
  experience: number;
  birthPlace: string;
  sportLevel: string;
  federationId: string;
  createdAt: Date;
  updatedAt: Date;
}
