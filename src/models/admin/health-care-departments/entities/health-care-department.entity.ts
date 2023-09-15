import { HealthCareDepartments } from '@prisma/client';

export class HealthCareDepartmentEntity implements HealthCareDepartments {
  id: string;
  nameTm: string;
  nameRu: string;
  createdAt: Date;
  updatedAt: Date;
}
