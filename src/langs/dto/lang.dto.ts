import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class GetLangsDto {
  @ApiProperty({ required: false })
  skip?: number;
  @ApiProperty({ default: 10 })
  take?: number;
  @ApiProperty()
  cursor?: Prisma.LangWhereUniqueInput;
  @ApiProperty()
  where?: Prisma.LangWhereInput;
  @ApiProperty()
  orderBy?: Prisma.LangOrderByWithRelationInput;
}

export class CreateLangDto implements Prisma.LangCreateInput {
  @ApiProperty()
  name: string;
}
