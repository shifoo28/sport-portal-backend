import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class CreateFederationTrainerDto
  implements Prisma.FederationTrainersCreateInput
{
  @ApiProperty({ required: false, default: 0 }) experience?: number;
  @ApiProperty() age: number;
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

export class FindAllFederationTrainersDto
  implements Prisma.FederationTrainersFindManyArgs
{
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false })
  where?: Prisma.FederationTrainersWhereInput;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.FederationTrainersOrderByWithRelationAndSearchRelevanceInput
    | Prisma.FederationTrainersOrderByWithRelationAndSearchRelevanceInput[];
  @ApiProperty({ required: false })
  include?: Prisma.FederationTrainersInclude<DefaultArgs>;
}
