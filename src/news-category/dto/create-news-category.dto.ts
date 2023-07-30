import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateNewsCategoryDto implements Prisma.NewsCategoryCreateInput {
  @ApiProperty()
  name: string;
}
