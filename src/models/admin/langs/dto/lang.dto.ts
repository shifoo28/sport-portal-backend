import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsString } from 'class-validator';

export class GetLangsDto {
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) cursor?: Prisma.LangWhereUniqueInput;
  @ApiProperty({ required: false }) where?: Prisma.LangWhereInput;
  @ApiProperty({ required: false })
  orderBy?: Prisma.LangOrderByWithRelationInput;
}

export class CreateLangDto implements Prisma.LangCreateInput {
  @IsString()
  @ApiProperty()
  name: string;
}
