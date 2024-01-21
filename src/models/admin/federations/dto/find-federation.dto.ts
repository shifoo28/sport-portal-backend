import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class FindAllFederationsDto implements Prisma.FederationsFindManyArgs {
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.FederationsWhereInput;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.FederationsOrderByWithRelationAndSearchRelevanceInput
    | Prisma.FederationsOrderByWithRelationAndSearchRelevanceInput[];
  @ApiProperty({ required: false })
  include?: Prisma.FederationsInclude<DefaultArgs>;
}
