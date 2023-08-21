import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class CreateFederationAthleteDto
  implements Prisma.FederationAthleteCreateInput
{
  @ApiProperty() name: string;
  @ApiProperty() club: string;
  @ApiProperty() made: string;
  @ApiProperty() rating: number;
  @ApiProperty() position: string;
  @ApiProperty() imagePath: string;
  @ApiProperty() federationId: string;
  federation: Prisma.FederationsCreateNestedOneWithoutFathleteInput;
}

export class FindAllFederationAthleteDto
  implements Prisma.FederationAthleteFindManyArgs
{
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false, default: 10 }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.FederationAthleteWhereInput;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.FederationAthleteOrderByWithRelationInput
    | Prisma.FederationAthleteOrderByWithRelationInput[];
  @ApiProperty({ required: false })
  select?: Prisma.FederationAthleteSelect<DefaultArgs>;
  @ApiProperty({ required: false })
  include?: Prisma.FederationAthleteInclude<DefaultArgs>;
}
