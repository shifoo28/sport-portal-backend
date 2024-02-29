import { FederationAthlete, Prisma } from '@prisma/client';

export class FederationAthleteEntity implements FederationAthlete {
  id: string;
  jobTm: string;
  jobRu: string;
  nameTm: string;
  nameRu: string;
  club: string;
  madeTm: string;
  madeRu: string;
  rating: number;
  positionTm: string;
  positionRu: string;
  imagePath: string;
  age: number;
  birthday: Date;
  birthPlaceTm: string;
  birthPlaceRu: string;
  views: number;
  experience: number;
  sportLevelTm: string;
  sportLevelRu: string;
  workedAtTm: string[];
  workedAtRu: string[];
  badgesTm: string[];
  badgesRu: string[];
  links: Prisma.JsonValue;
  federationId: string;
  createdAt: Date;
  updatedAt: Date;
}
