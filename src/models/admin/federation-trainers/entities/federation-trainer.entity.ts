import { FederationTrainers, Prisma } from '@prisma/client';

export class FederationTrainerEntity implements FederationTrainers {
  id: string;
  rating: number;
  experience: number;
  views: number;
  age: number;
  birthday: Date;
  jobTm: string;
  jobRu: string;
  nameTm: string;
  nameRu: string;
  madeTm: string;
  madeRu: string;
  birthPlaceTm: string;
  birthPlaceRu: string;
  sportLevelTm: string;
  sportLevelRu: string;
  workedAtTm: string[];
  workedAtRu: string[];
  badgesTm: string[];
  badgesRu: string[];
  imagePath: string;
  links: Prisma.JsonValue;
  federationId: string;
  createdAt: Date;
  updatedAt: Date;
}
