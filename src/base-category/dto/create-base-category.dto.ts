import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateBaseCategoryDto implements Prisma.BaseCategoryCreateInput {
  @ApiProperty()
  name: string;
}
