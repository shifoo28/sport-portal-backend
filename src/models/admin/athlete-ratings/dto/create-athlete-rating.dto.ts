import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateAthleteRatingDto
  implements Prisma.AthleteRatingsCreateInput
{
  @ApiProperty() athleteId: string;
  @ApiProperty({ enum: [1, 2, 3, 4, 5] }) rating: number;
  @ApiProperty() comment: string;
  user: Prisma.UsersCreateNestedOneWithoutAthleteRatingsInput;
  userId: string;
  athlete: Prisma.FederationAthleteCreateNestedOneWithoutAthleteRatingsInput;
}
