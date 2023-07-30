import { PartialType } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { CreateVideoCategoryDto } from './create-video-category.dto';

export class UpdateVideoCategoryDto
  extends PartialType(CreateVideoCategoryDto)
  implements Prisma.VideoCategoryUpdateInput {}
