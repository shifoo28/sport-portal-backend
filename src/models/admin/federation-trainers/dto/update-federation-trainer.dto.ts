import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFederationTrainerDto } from './create-federation-trainer.dto';
import { Prisma } from '@prisma/client';

export class UpdateFederationTrainerDto extends PartialType(
  CreateFederationTrainerDto,
) {
  @ApiProperty() age?: number;
  @ApiProperty() job?: string;
  @ApiProperty() name?: string;
  @ApiProperty() made?: string;
  @ApiProperty() rating?: number;
  @ApiProperty() experience?: number;
  @ApiProperty() birthPlace?: string;
  @ApiProperty() sportLevel?: string;
  @ApiProperty() workedAt?:
    | Prisma.FederationTrainersCreateworkedAtInput
    | string[];
  @ApiProperty() links?:
    | Prisma.NullableJsonNullValueInput
    | Prisma.InputJsonValue;
  @ApiProperty() badges?: Prisma.FederationTrainersCreatebadgesInput | string[];
  @ApiProperty() federationId: string;
  @ApiProperty({
    format: 'binary',
    type: 'string',
    description:
      'Max file size: 25MB. Expected file types: PNG, JPG, JPEG, JFIF, WEBP',
  })
  photo?: Express.Multer.File;
  imagePath?: string;
  federation: Prisma.FederationsCreateNestedOneWithoutFtrainersInput;
}
