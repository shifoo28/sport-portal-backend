import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateNewsDto implements Prisma.NewsCreateInput {
  @ApiProperty() textTm: string;
  @ApiProperty() textRu: string;
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty() locationTm: string;
  @ApiProperty() locationRu: string;
  imagePath: string;
  category: Prisma.SportCategoriesCreateNestedOneWithoutNewsInput;
  @ApiProperty() categoryId: string;
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description:
      'Max file size: 25MB. Expected file types: PNG, JPG, JPEG, JFIF, WEBP',
  })
  photo: Express.Multer.File;
}
