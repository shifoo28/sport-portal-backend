import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class FindAllCompetitionsDto implements Prisma.CompetitionsFindManyArgs {
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.CompetitionsWhereInput;
  @ApiProperty({ required: false })
  select?: Prisma.CompetitionsSelect<DefaultArgs>;
  @ApiProperty({ required: false })
  include?: Prisma.CompetitionsInclude<DefaultArgs>;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.CompetitionsOrderByWithRelationAndSearchRelevanceInput
    | Prisma.CompetitionsOrderByWithRelationAndSearchRelevanceInput[];
}
