import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class CreateFederationDto implements Prisma.FederationsCreateInput {
  @ApiProperty({}) nameTm: string;
  @ApiProperty({}) nameRu: string;
  fsports?: Prisma.FederationSportsCreateNestedOneWithoutFederationInput;
  fathlete?: Prisma.FederationAthleteCreateNestedOneWithoutFederationInput;
  ftrainers?: Prisma.FederationTrainersCreateNestedOneWithoutFederationInput;
}

export class FindAllFederationsDto implements Prisma.FederationsFindManyArgs {
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false, default: 10 }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.FederationsWhereInput;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.FederationsOrderByWithRelationInput
    | Prisma.FederationsOrderByWithRelationInput[];
  include?: Prisma.FederationsInclude<DefaultArgs>;
}
