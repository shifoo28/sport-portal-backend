import { Prisma } from '@prisma/client';

export class CreateVideoCategoryDto implements Prisma.VideoCategoryCreateInput {
  name: string;
}
