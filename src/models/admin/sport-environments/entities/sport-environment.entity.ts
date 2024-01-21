import { SportEnvironment } from '@prisma/client';

export class SportEnvironmentEntity implements SportEnvironment {
  id: string;
  nameTm: string;
  nameRu: string;
  createdAt: Date;
  updatedAt: Date;
}
