import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class FindAllChampionships implements Prisma.ChampionshipsFindManyArgs {
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.ChampionshipsWhereInput;
  @ApiProperty({ required: false })
  include?: Prisma.ChampionshipsInclude<DefaultArgs>;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.ChampionshipsOrderByWithRelationAndSearchRelevanceInput
    | Prisma.ChampionshipsOrderByWithRelationAndSearchRelevanceInput[];
}
