import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class FindAllAthleteRatingsDto
  implements Prisma.AthleteRatingsFindManyArgs
{
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.AthleteRatingsWhereInput;
  @ApiProperty({ required: false })
  include?: Prisma.AthleteRatingsInclude<DefaultArgs>;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.AthleteRatingsOrderByWithRelationAndSearchRelevanceInput
    | Prisma.AthleteRatingsOrderByWithRelationAndSearchRelevanceInput[];
}
