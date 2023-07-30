import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateNewsDto implements Prisma.NewsCreateInput {
  @ApiProperty()
  name: string;
  @ApiProperty()
  location: string;
  @ApiProperty()
  text: string;
}
