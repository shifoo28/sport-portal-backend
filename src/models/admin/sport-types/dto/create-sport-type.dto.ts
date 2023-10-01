import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class CreateSportTypeDto implements Prisma.SportTypesCreateInput {
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
}

export class FindAllSportTypesDto implements Prisma.SportTypesFindManyArgs {
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.SportTypesWhereInput;
  @ApiProperty({ required: false })
  select?: Prisma.SportTypesSelect<DefaultArgs>;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.SportTypesOrderByWithRelationInput
    | Prisma.SportTypesOrderByWithRelationInput[];
}
