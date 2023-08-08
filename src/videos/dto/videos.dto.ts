import { ApiProperty } from '@nestjs/swagger';

export class FindAllVideosDto {
  @ApiProperty({ required: false })
  skip?: number;
  @ApiProperty({ default: 10 })
  take: number;
}
