import { ApiProperty } from '@nestjs/swagger';

export class FindAllVideoCategory {
  @ApiProperty({ required: false })
  skip: number;
  @ApiProperty({ default: 10 })
  take: number;
}
