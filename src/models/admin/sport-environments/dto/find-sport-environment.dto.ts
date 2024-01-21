import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class FindAllSportEnvironmentsDto
  implements Prisma.SportEnvironmentFindManyArgs
{
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.SportEnvironmentWhereInput;
  @ApiProperty({ required: false })
  include?: Prisma.SportEnvironmentInclude<DefaultArgs>;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.SportEnvironmentOrderByWithRelationAndSearchRelevanceInput
    | Prisma.SportEnvironmentOrderByWithRelationAndSearchRelevanceInput[];
}
