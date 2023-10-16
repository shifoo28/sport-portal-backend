import { ApiProperty } from '@nestjs/swagger';
import { Prisma, Sections } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class FindAllNewsDto implements Prisma.NewsFindManyArgs {
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false, enum: [Sections.Local, Sections.World] })
  section?: Sections;
  @ApiProperty({ required: false }) where?: Prisma.NewsWhereInput;
  @ApiProperty({ required: false }) include?: Prisma.NewsInclude<DefaultArgs>;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.NewsOrderByWithRelationAndSearchRelevanceInput
    | Prisma.NewsOrderByWithRelationAndSearchRelevanceInput[];
}
