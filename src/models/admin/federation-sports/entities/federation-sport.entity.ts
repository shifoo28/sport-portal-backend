import { FederationSports } from '@prisma/client';

export class FederationSportEntity implements FederationSports {
  id: string;
  tel: string;
  fax: string;
  web: string;
  email: string;
  leaderTm: string;
  leaderRu: string;
  founded: number;
  locationTm: string;
  locationRu: string;
  presidentTm: string;
  presidentRu: string;
  federationId: string;
  createdAt: Date;
  updatedAt: Date;
}
