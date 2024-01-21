import { FederationGymsAndClubs } from '@prisma/client';

export class FederationGymsAndClubEntity implements FederationGymsAndClubs {
  id: string;
  nameTm: string;
  nameRu: string;
  locationTm: string;
  locationRu: string;
  email: string;
  link: string;
  latitude: number;
  longitude: number;
  tel: string[];
  sportsTm: string[];
  sportsRu: string[];
  openAtTm: string[];
  openAtRu: string[];
  imagePath1: string;
  imagePath2: string;
  imagePath3: string;
  imagePath4: string;
  imagePath5: string;
  views: number;
  environmentId: string;
  createdAt: Date;
  updatedAt: Date;
}
