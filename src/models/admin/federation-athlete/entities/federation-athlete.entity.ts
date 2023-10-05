import { FederationAthlete, Prisma } from '@prisma/client';

export class FederationAthleteEntity implements FederationAthlete {
  birthPlaceTm: string;
  birthPlaceRu: string;
  nameTm: string;
  nameRu: string;
  madeTm: string;
  madeRu: string;
  positionTm: string;
  positionRu: string;
  sportLevelTm: string;
  sportLevelRu: string;
  workedAtTm: string[];
  workedAtRu: string[];
  badgesTm: string[];
  badgesRu: string[];
  age: number;
  birthPlace: string;
  views: number;
  experience: number;
  sportLevel: string;
  workedAt: string[];
  badges: string[];
  links: Prisma.JsonValue;
  id: string;
  name: string;
  club: string;
  made: string;
  rating: number;
  position: string;
  imagePath: string;
  federationId: string;
  createdAt: Date;
  updatedAt: Date;
}
