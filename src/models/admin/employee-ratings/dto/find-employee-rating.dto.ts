import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class FindAllEmployeeRatingsDto
  implements Prisma.EmployeeRatingsFindManyArgs
{
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.EmployeeRatingsWhereInput;
  @ApiProperty({ required: false })
  include?: Prisma.EmployeeRatingsInclude<DefaultArgs>;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.EmployeeRatingsOrderByWithRelationAndSearchRelevanceInput
    | Prisma.EmployeeRatingsOrderByWithRelationAndSearchRelevanceInput[];
}
