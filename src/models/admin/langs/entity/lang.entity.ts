import { Lang } from '@prisma/client';

export class LangEntity implements Lang {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
