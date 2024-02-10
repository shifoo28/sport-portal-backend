import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

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
