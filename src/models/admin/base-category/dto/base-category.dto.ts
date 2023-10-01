import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class FindAllBaseCategoryDto implements Prisma.BaseCategoryFindManyArgs {
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.BaseCategoryWhereInput;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.BaseCategoryOrderByWithRelationInput
    | Prisma.BaseCategoryOrderByWithRelationInput[];
}
