import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
 
export class CreateCompetitionTypeDto
  implements Prisma.CompetitionTypesCreateInput
{
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  competition?: Prisma.CompetitionsCreateNestedManyWithoutCompetitionTypeInput;
}
