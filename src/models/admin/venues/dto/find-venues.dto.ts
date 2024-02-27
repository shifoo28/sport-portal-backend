import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class FindAllVenuesDto implements Prisma.VenuesFindManyArgs {
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.VenuesWhereInput;
  @ApiProperty({ required: false }) include?: Prisma.VenuesInclude<DefaultArgs>;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.VenuesOrderByWithRelationAndSearchRelevanceInput
    | Prisma.VenuesOrderByWithRelationAndSearchRelevanceInput[];
}
