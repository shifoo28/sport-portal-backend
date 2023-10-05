import { FederationHealthCareEmployees, Prisma } from '@prisma/client';

export class FederationHealthCareEmployeeEntity
  implements FederationHealthCareEmployees
{
  nameTm: string;
  nameRu: string;
  jobTm: string;
  jobRu: string;
  workAtTm: string;
  workAtRu: string;
  id: string;
  name: string;
  job: string;
  age: number;
  workAt: string;
  departmentId: string;
  experience: number;
  views: number;
  rating: number;
  imagePath: string;
  links: Prisma.JsonValue;
  createdAt: Date;
  updatedAt: Date;
}
