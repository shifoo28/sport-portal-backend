import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateFederationTrainerDto
  implements Prisma.FederationTrainersCreateInput
{
  @ApiProperty({ required: false, default: 0 }) experience?: number;
  @ApiProperty({ default: new Date() }) birthday: Date;
  @ApiProperty() jobTm: string;
  @ApiProperty() jobRu: string;
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty() madeTm: string;
  @ApiProperty() madeRu: string;
  @ApiProperty() birthPlaceTm: string;
  @ApiProperty() birthPlaceRu: string;
  @ApiProperty() sportLevelTm: string;
  @ApiProperty() sportLevelRu: string;
  @ApiProperty() federationId: string;

  @ApiProperty({ type: [String] }) workedAtTm?:
    | Prisma.FederationTrainersCreateworkedAtTmInput
    | string[];
  @ApiProperty({ type: [String] }) workedAtRu?:
    | string[]
    | Prisma.FederationTrainersCreateworkedAtRuInput;
  @ApiProperty({ type: [String] }) badgesTm?:
    | string[]
    | Prisma.FederationTrainersCreatebadgesTmInput;
  @ApiProperty({ type: [String] }) badgesRu?:
    | string[]
    | Prisma.FederationTrainersCreatebadgesRuInput;
  @ApiProperty() links?: Prisma.NullTypes.JsonNull | Prisma.InputJsonValue;

  @ApiProperty({
    format: 'binary',
    type: 'string',
    description:
      'Max file size: 25MB. Expected file types: PNG, JPG, JPEG, JFIF, WEBP',
  })
  photo: Express.Multer.File;
  imagePath: string;
  federation: Prisma.FederationsCreateNestedOneWithoutFtrainersInput;
}
