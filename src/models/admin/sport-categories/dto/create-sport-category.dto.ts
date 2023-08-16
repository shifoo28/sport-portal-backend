import { ApiProperty } from '@nestjs/swagger';

export class CreateSportCategoryDto {
  // implements Prisma.SportCategoriesCreateInput
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
}
