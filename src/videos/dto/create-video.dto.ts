import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateVideoDto implements Prisma.VideosCreateInput {
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty() videoPath: string;
  @ApiProperty() imagePath: string;
  @ApiProperty()
  category: Prisma.SportCategoriesCreateNestedOneWithoutVideosInput;
  @ApiProperty() categoryId: string;
}

export class CreateManyVideosDto implements Prisma.VideosCreateManyInput {
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty() videoPath: string;
  @ApiProperty() imagePath: string;
  @ApiProperty() categoryId: string;
}
