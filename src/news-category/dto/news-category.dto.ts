import { ApiProperty } from '@nestjs/swagger';

export class FindAllNewsCategoryDto {
  @ApiProperty({ required: false })
  skip?: number;
  @ApiProperty({ default: 10 })
  take?: number;
}
