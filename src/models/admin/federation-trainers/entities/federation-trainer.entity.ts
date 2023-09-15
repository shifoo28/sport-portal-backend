import { FederationTrainers, Prisma } from '@prisma/client';

export class FederationTrainerEntity implements FederationTrainers {
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
