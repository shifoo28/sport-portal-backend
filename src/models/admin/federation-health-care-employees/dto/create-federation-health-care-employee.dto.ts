import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateFederationHealthCareEmployeeDto
  implements Prisma.FederationHealthCareEmployeesCreateInput
{
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty() jobTm: string;
  @ApiProperty() jobRu: string;
  @ApiProperty() age: number;
  @ApiProperty({ default: new Date() }) birthday: Date;
  @ApiProperty() workAtTm: string;
  @ApiProperty() workAtRu: string;
  @ApiProperty({ required: false, default: 0 }) experience?: number;
  @ApiProperty({ required: false }) links?:
    | Prisma.NullTypes.JsonNull
    | Prisma.InputJsonValue;
  @ApiProperty({
    format: 'binary',
    type: 'string',
    description:
      'Max file size: 25MB. Expected file types: PNG, JPG, JPEG, JFIF, WEBP',
  })
  photo: Express.Multer.File;
  imagePath: string;
  @ApiProperty() departmentId: string;
  department: Prisma.HealthCareDepartmentsCreateNestedOneWithoutEmployeesInput;
}
