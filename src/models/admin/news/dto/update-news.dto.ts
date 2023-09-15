import { PartialType } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { CreateNewsDto } from './create-news.dto';

export class UpdateNewsDto
  extends PartialType(CreateNewsDto)
  implements Prisma.NewsUpdateInput
{
  views?: number | Prisma.IntFieldUpdateOperationsInput;
}
