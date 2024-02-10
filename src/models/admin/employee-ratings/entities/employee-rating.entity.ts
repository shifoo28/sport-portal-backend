import { EmployeeRatings } from '@prisma/client';

export class EmployeeRatingEntity implements EmployeeRatings {
  id: string;
  userId: string;
  employeeId: string;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}
