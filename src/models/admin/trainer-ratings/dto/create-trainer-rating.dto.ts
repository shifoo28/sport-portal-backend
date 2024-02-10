import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateTrainerRatingDto
  implements Prisma.TrainerRatingsCreateInput
{
  @ApiProperty() trainerId: string;
  @ApiProperty({ enum: [1, 2, 3, 4, 5] }) rating: number;
  @ApiProperty() comment: string;
  user: Prisma.UsersCreateNestedOneWithoutTrainerRatingsInput;
  userId: string;
  trainer: Prisma.FederationTrainersCreateNestedOneWithoutTrainerRatingsInput;
}
