import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class FindAllTrainerRatingsDto
  implements Prisma.TrainerRatingsFindManyArgs
{
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.TrainerRatingsWhereInput;
  @ApiProperty({ required: false })
  include?: Prisma.TrainerRatingsInclude<DefaultArgs>;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.TrainerRatingsOrderByWithRelationAndSearchRelevanceInput
    | Prisma.TrainerRatingsOrderByWithRelationAndSearchRelevanceInput[];
}
