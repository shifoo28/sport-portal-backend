import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class CreateHealthCareDepartmentDto
  implements Prisma.HealthCareDepartmentsCreateInput
{
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  employees?: Prisma.FederationHealthCareEmployeesCreateNestedManyWithoutDepartmentInput;
}

export class FindAllHealthCareDepartment
  implements Prisma.HealthCareDepartmentsFindManyArgs
{
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false })
  where?: Prisma.HealthCareDepartmentsWhereInput;
  @ApiProperty({ required: false })
  select?: Prisma.HealthCareDepartmentsSelect<DefaultArgs>;
  @ApiProperty({ required: false })
  include?: Prisma.HealthCareDepartmentsInclude<DefaultArgs>;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.HealthCareDepartmentsOrderByWithRelationAndSearchRelevanceInput
    | Prisma.HealthCareDepartmentsOrderByWithRelationAndSearchRelevanceInput[];
}
