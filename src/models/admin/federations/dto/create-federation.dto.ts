import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateFederationDto implements Prisma.FederationsCreateInput {
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description:
      'Max file size: 25MB. Expected file types: PNG, JPG, JPEG, JFIF, WEBP, SVG',
  })
  photo: Express.Multer.File;
  imagePath: string;
  fsports?: Prisma.FederationSportsCreateNestedOneWithoutFederationInput;
  fathlete?: Prisma.FederationAthleteCreateNestedManyWithoutFederationInput;
  ftrainers?: Prisma.FederationTrainersCreateNestedManyWithoutFederationInput;
}
