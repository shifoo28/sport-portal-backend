import { PartialType } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { CreateVideoDto } from './create-video.dto';

export class UpdateVideoDto
  extends PartialType(CreateVideoDto)
  implements Prisma.VideosUpdateInput {}
