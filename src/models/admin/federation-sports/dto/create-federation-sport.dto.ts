import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class CreateFederationSportDto
  implements Prisma.FederationSportsCreateInput
{
  @ApiProperty() leaderTm: string;
  @ApiProperty() leaderRu: string;
  @ApiProperty({ description: 'Only year!' }) founded: number;
  @ApiProperty() locationTm: string;
  @ApiProperty() locationRu: string;
  @ApiProperty() presidentTm: string;
  @ApiProperty() presidentRu: string;
  @ApiProperty() tel: string;
  @ApiProperty() fax: string;
  @ApiProperty() email: string;
  @ApiProperty() web: string;
  @ApiProperty() federationId: string;
  federation: Prisma.FederationsCreateNestedOneWithoutFsportsInput;
}

export class FindAllFederationSportsDto
  implements Prisma.FederationSportsFindManyArgs
{
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.FederationSportsWhereInput;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.FederationSportsOrderByWithRelationAndSearchRelevanceInput
    | Prisma.FederationSportsOrderByWithRelationAndSearchRelevanceInput[];
  @ApiProperty({ required: false })
  select?: Prisma.FederationSportsSelect<DefaultArgs>;
  @ApiProperty({ required: false })
  include?: Prisma.FederationSportsInclude<DefaultArgs>;
}
