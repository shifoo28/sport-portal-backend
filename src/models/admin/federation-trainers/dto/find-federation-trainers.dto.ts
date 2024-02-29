import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class FindAllFederationTrainersDto
  implements Prisma.FederationTrainersFindManyArgs
{
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false })
  where?: Prisma.FederationTrainersWhereInput;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.FederationTrainersOrderByWithRelationAndSearchRelevanceInput
    | Prisma.FederationTrainersOrderByWithRelationAndSearchRelevanceInput[];
  @ApiProperty({ required: false })
  include?: Prisma.FederationTrainersInclude<DefaultArgs>;
}
