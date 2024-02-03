import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class FindAllTeamsDto implements Prisma.TeamsFindManyArgs {
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.TeamsWhereInput;
  @ApiProperty({ required: false }) include?: Prisma.TeamsInclude<DefaultArgs>;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.TeamsOrderByWithRelationAndSearchRelevanceInput
    | Prisma.TeamsOrderByWithRelationAndSearchRelevanceInput[];
}
