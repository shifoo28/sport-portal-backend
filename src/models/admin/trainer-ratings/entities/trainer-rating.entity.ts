import { TrainerRatings } from '@prisma/client';

export class TrainerRatingEntity implements TrainerRatings {
  id: string;
  userId: string;
  trainerId: string;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}
