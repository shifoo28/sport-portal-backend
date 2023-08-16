import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateNewsDto implements Prisma.NewsCreateInput {
  @ApiProperty() textTm: string;
  @ApiProperty() textRu: string;
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty() location: string;
  imagePath: string;
  @ApiProperty() categoryId: string;
  category: Prisma.SportCategoriesCreateNestedOneWithoutNewsInput;
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description:
      'Max file size: 25MB. Expected file types: PNG, JPG, JPEG, JFIF, WEBP',
  })
  photo: Express.Multer.File;
}

export class CreateManyNewsDto implements Prisma.NewsCreateManyInput {
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty() textTm: string;
  @ApiProperty() textRu: string;
  @ApiProperty() location: string;
  imagePath: string;
  @ApiProperty() categoryId: string;
}
