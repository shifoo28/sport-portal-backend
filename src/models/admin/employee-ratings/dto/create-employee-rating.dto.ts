import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateEmployeeRatingDto
  implements Prisma.EmployeeRatingsCreateInput
{
  @ApiProperty({ enum: [1, 2, 3, 4, 5] }) rating: number;
  @ApiProperty() comment: string;
  user: Prisma.UsersCreateNestedOneWithoutEmployeeRatingsInput;
  userId: string;
  employee: Prisma.FederationHealthCareEmployeesCreateNestedOneWithoutEmployeeRatingsInput;
  @ApiProperty() employeeId: string;
}
