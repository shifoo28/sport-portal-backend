import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateVenueDto implements Prisma.VenuesCreateInput {
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  Competitions?: Prisma.CompetitionsCreateNestedManyWithoutVenueInput;
}
