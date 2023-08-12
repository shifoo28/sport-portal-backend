import { ApiProperty } from '@nestjs/swagger';

export class FindAllSportCategoriesDto {
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ default: 10 }) take: number;
}
