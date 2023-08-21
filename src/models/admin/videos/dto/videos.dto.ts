import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export default class FindAllVideosDto implements Prisma.VideosFindManyArgs {
  @ApiProperty({ default: 0, required: false }) skip?: number;
  @ApiProperty({ default: 10, required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.VideosWhereInput;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.VideosOrderByWithRelationInput
    | Prisma.VideosOrderByWithRelationInput[];
}
