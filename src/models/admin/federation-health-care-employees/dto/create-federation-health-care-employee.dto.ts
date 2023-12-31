import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class CreateFederationHealthCareEmployeeDto
  implements Prisma.FederationHealthCareEmployeesCreateInput
{
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty() jobTm: string;
  @ApiProperty() jobRu: string;
  @ApiProperty() workAtTm: string;
  @ApiProperty() workAtRu: string;
  @ApiProperty() age: number;
  @ApiProperty() departmentId: string;
  @ApiProperty({ required: false, default: 0 }) experience?: number;
  @ApiProperty({ required: false, default: 4.5 }) rating?: number;
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
  department: Prisma.HealthCareDepartmentsCreateNestedOneWithoutEmployeesInput;
}

export class FindAllFederationHealthCareEmployeesDto
  implements Prisma.FederationHealthCareEmployeesFindManyArgs
{
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false })
  select?: Prisma.FederationHealthCareEmployeesSelect<DefaultArgs>;
  @ApiProperty({ required: false })
  where?: Prisma.FederationHealthCareEmployeesWhereInput;
  @ApiProperty({ required: false })
  include?: Prisma.FederationHealthCareEmployeesInclude<DefaultArgs>;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.FederationHealthCareEmployeesOrderByWithRelationAndSearchRelevanceInput
    | Prisma.FederationHealthCareEmployeesOrderByWithRelationAndSearchRelevanceInput[];
}
