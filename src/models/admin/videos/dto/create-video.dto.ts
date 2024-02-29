import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateVideoDto implements Prisma.VideosCreateInput {
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty() textTm: string;
  @ApiProperty() textRu: string;
  videoPath: string;
  imagePath: string;
  @ApiProperty() categoryId: string;
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
    description: 'Max file size: 500MB. Expected file types: MP4, OGG, MPEG, WEBM',
  })
  video: Express.Multer.File;
}
