import { FederationSports } from '@prisma/client';

export class FederationSportEntity implements FederationSports {
  id: string;
  tel: string;
  fax: string;
  web: string;
  email: string;
  leader: string;
  founded: string;
  location: string;
  president: string;
  federationId: string;
  createdAt: Date;
  updatedAt: Date;
}
