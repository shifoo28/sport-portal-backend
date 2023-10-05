import { FederationSports } from '@prisma/client';

export class FederationSportEntity implements FederationSports {
  leaderTm: string;
  leaderRu: string;
  founded: number;
  locationTm: string;
  locationRu: string;
  presidentTm: string;
  presidentRu: string;
  id: string;
  tel: string;
  fax: string;
  web: string;
  email: string;
  leader: string;
  location: string;
  president: string;
  federationId: string;
  createdAt: Date;
  updatedAt: Date;
}
