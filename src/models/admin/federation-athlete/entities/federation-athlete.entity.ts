import { FederationAthlete } from '@prisma/client';

export class FederationAthleteEntity implements FederationAthlete {
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
