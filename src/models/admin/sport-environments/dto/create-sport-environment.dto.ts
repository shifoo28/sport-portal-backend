import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateSportEnvironmentDto
  implements Prisma.SportEnvironmentCreateInput
{
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  gymsandclubs?: Prisma.FederationGymsAndClubsCreateNestedManyWithoutEnvironmentInput;
}
