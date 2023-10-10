import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class CreateShopCategoryDto implements Prisma.ShopCategoriesCreateInput {
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty({ required: false }) parentId: string;
  parentCategory: Prisma.ShopCategoriesCreateNestedOneWithoutShopCategoryInput;
  shopCategory?: Prisma.ShopCategoriesCreateNestedManyWithoutParentCategoryInput;
}

export class FindAllShopCategoriesDto
  implements Prisma.ShopCategoriesFindManyArgs
{
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.ShopCategoriesWhereInput;
  @ApiProperty({ required: false })
  select?: Prisma.ShopCategoriesSelect<DefaultArgs>;
  @ApiProperty({ required: false })
  include?: Prisma.ShopCategoriesInclude<DefaultArgs>;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.ShopCategoriesOrderByWithRelationInput
    | Prisma.ShopCategoriesOrderByWithRelationInput[];
}
