import { FederationHealthCareEmployees, Prisma } from '@prisma/client';

export class FederationHealthCareEmployeeEntity
  implements FederationHealthCareEmployees
{
  id: string;
  nameTm: string;
  nameRu: string;
  jobTm: string;
  jobRu: string;
  birthday: Date;
  workAtTm: string;
  workAtRu: string;
  experience: number;
  views: number;
  rating: number;
  links: Prisma.JsonValue;
  imagePath: string;
  departmentId: string;
  createdAt: Date;
  updatedAt: Date;
}
