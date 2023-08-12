import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateVideoDto implements Prisma.VideosCreateInput {
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty() videoPath: string;
  @ApiProperty() imagePath: string;
  @ApiProperty() categoryId: string;
  @ApiProperty()
  category: Prisma.SportCategoriesCreateNestedOneWithoutVideosInput;
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Max file size: 25MB. Expected file types: PNG, JPG, JPEG',
  })
  photo: Express.Multer.File;
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Max file size: 250MB. Expected file types: MP4',
  })
  video: Express.Multer.File;
}

export class CreateManyVideosDto implements Prisma.VideosCreateManyInput {
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty() videoPath: string;
  @ApiProperty() imagePath: string;
  @ApiProperty() categoryId: string;
}
