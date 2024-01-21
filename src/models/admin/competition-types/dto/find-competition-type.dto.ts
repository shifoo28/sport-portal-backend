import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class FindAllCompetitionTypesDto
  implements Prisma.CompetitionTypesFindManyArgs
{
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.CompetitionTypesWhereInput;
  @ApiProperty({ required: false })
  select?: Prisma.CompetitionTypesSelect<DefaultArgs>;
  @ApiProperty({ required: false })
  include?: Prisma.CompetitionTypesInclude<DefaultArgs>;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.CompetitionTypesOrderByWithRelationAndSearchRelevanceInput
    | Prisma.CompetitionTypesOrderByWithRelationAndSearchRelevanceInput[];
}
