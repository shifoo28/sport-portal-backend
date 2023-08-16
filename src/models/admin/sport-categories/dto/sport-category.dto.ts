import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class FindAllSportCategoriesDto
  implements Prisma.SportCategoriesFindManyArgs
{
  @ApiProperty({ default: 0, required: false }) skip?: number;
  @ApiProperty({ default: 10, required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.SportCategoriesWhereInput;
}
