import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class FindAllFederationAthleteDto
  implements Prisma.FederationAthleteFindManyArgs
{
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.FederationAthleteWhereInput;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.FederationAthleteOrderByWithRelationAndSearchRelevanceInput
    | Prisma.FederationAthleteOrderByWithRelationAndSearchRelevanceInput[];
  @ApiProperty({ required: false })
  select?: Prisma.FederationAthleteSelect<DefaultArgs>;
  @ApiProperty({ required: false })
  include?: Prisma.FederationAthleteInclude<DefaultArgs>;
}
