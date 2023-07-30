import { PartialType } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { CreateNewsCategoryDto } from './create-news-category.dto';

export class UpdateNewsCategoryDto
  extends PartialType(CreateNewsCategoryDto)
  implements Prisma.NewsCategoryUpdateInput {}
