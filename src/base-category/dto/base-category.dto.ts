import { ApiProperty } from '@nestjs/swagger';

export class FindAllBaseCategoryDto {
  @ApiProperty({ required: false })
  skip?: number;
  @ApiProperty({ default: 10 })
  take?: number;
}
