import { AthleteRatings } from '@prisma/client';

export class AthleteRatingEntity implements AthleteRatings {
  id: string;
  userId: string;
  athleteId: string;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}
