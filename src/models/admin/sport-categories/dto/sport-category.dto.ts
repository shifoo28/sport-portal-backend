import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class FindAllSportCategoriesDto
  implements Prisma.SportCategoriesFindManyArgs
{
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.SportCategoriesWhereInput;
  @ApiProperty({ required: false })
  include?: Prisma.SportCategoriesInclude<DefaultArgs>;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.SportCategoriesOrderByWithRelationAndSearchRelevanceInput
    | Prisma.SportCategoriesOrderByWithRelationAndSearchRelevanceInput[];
}
