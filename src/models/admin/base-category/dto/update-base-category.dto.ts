import { PartialType } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { CreateBaseCategoryDto } from './create-base-category.dto';

export class UpdateBaseCategoryDto
  extends PartialType(CreateBaseCategoryDto)
  implements Prisma.BaseCategoryUpdateInput {}
