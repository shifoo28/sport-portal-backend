import { ApiProperty } from '@nestjs/swagger';

export class FindAllNewsDto {
  @ApiProperty({ required: false })
  skip: number;
  @ApiProperty({ default: 10 })
  take: number;
}
