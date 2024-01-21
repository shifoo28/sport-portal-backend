import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class FindAllFederationGymsAndClubs
  implements Prisma.FederationGymsAndClubsFindManyArgs
{
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false })
  include?: Prisma.FederationGymsAndClubsInclude<DefaultArgs>;
  @ApiProperty({ required: false })
  where?: Prisma.FederationGymsAndClubsWhereInput;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.FederationGymsAndClubsOrderByWithRelationAndSearchRelevanceInput
    | Prisma.FederationGymsAndClubsOrderByWithRelationAndSearchRelevanceInput[];
}
