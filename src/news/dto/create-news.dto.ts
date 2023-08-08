import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateNewsDto implements Prisma.NewsCreateInput {
  @ApiProperty()
  nameTm: string;
  @ApiProperty()
  nameRu: string;
  @ApiProperty()
  text: string;
  @ApiProperty()
  views: number;
  @ApiProperty()
  location: string;
  @ApiProperty()
  imagePath: string;
  @ApiProperty()
  categoryId: string;
  @ApiProperty({ required: false })
  category: Prisma.SportCategoriesCreateNestedOneWithoutNewsInput;
}

export class CreateManyNewsDto implements Prisma.NewsCreateManyInput {
  @ApiProperty({})
  text: string;
  @ApiProperty()
  views: number;
  @ApiProperty()
  nameTm: string;
  @ApiProperty()
  nameRu: string;
  @ApiProperty()
  location: string;
  @ApiProperty()
  imagePath: string;
  @ApiProperty()
  categoryId: string;
}
