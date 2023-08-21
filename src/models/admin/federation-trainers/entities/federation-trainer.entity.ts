import { FederationTrainers } from '@prisma/client';

export class FederationTrainerEntity implements FederationTrainers {
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
