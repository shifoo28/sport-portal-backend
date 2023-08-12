import { ApiProperty } from '@nestjs/swagger';
import { Prisma, Sections } from '@prisma/client';

export class CreateSportCategoryDto
  implements Prisma.SportCategoriesCreateInput
{
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty() section: Sections;
  //   @ApiProperty({ required: false })
  //   news?: Prisma.NewsCreateNestedManyWithoutCategoryInput;
  //   @ApiProperty({ required: false })
  //   videos?: Prisma.VideosCreateNestedManyWithoutCategoryInput;
}
