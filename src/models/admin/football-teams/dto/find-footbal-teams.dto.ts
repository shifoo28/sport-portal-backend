import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class FindAllFootballTeamsDto
  implements Prisma.FootballTeamsFindManyArgs
{
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.FootballTeamsWhereInput;
  @ApiProperty({ required: false })
  include?: Prisma.FootballTeamsInclude<DefaultArgs>;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.FootballTeamsOrderByWithRelationAndSearchRelevanceInput
    | Prisma.FootballTeamsOrderByWithRelationAndSearchRelevanceInput[];
}
