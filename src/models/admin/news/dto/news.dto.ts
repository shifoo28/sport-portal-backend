import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class FindAllNewsDto implements Prisma.NewsFindManyArgs {
  @ApiProperty({ default: 0, required: false }) skip?: number;
  @ApiProperty({ default: 10, required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.NewsWhereInput;
  @ApiProperty({ required: false }) include?: Prisma.NewsInclude<DefaultArgs>;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.NewsOrderByWithRelationInput
    | Prisma.NewsOrderByWithRelationInput[];
}
