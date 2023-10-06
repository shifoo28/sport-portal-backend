import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateLangDto implements Prisma.LangCreateInput {
  @ApiProperty()
  name: string;
}
