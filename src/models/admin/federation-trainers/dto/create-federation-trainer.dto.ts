import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class CreateFederationTrainerDto
  implements Prisma.FederationTrainersCreateInput
{
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty() madeTm: string;
  @ApiProperty() madeRu: string;
  @ApiProperty() sportLevelTm: string;
  @ApiProperty() sportLevelRu: string;
  @ApiProperty({ type: [String] }) workedAtTm?:
    | Prisma.FederationTrainersCreateworkedAtTmInput
    | string[];
  @ApiProperty({ type: [String] }) workedAtRu?:
    | Prisma.FederationTrainersCreateworkedAtRuInput
    | string[];
  @ApiProperty({ type: [String] }) badgesTm?:
    | Prisma.FederationTrainersCreatebadgesTmInput
    | string[];
  @ApiProperty({ type: [String] }) badgesRu?:
    | Prisma.FederationTrainersCreatebadgesRuInput
    | string[];
  @ApiProperty() age: number;
  @ApiProperty() job: string;
  @ApiProperty() name: string;
  @ApiProperty() made: string;
  @ApiProperty() rating: number;
  @ApiProperty() experience: number;
  @ApiProperty() birthPlace: string;
  @ApiProperty() sportLevel: string;
  @ApiProperty({ type: [String] }) workedAt:
    | Prisma.FederationTrainersCreateworkedAtInput
    | string[];
  @ApiProperty({ type: Object }) links?:
    | Prisma.NullTypes.JsonNull
    | Prisma.InputJsonValue;
  @ApiProperty({ type: [String] }) badges:
    | Prisma.FederationTrainersCreatebadgesInput
    | string[];
  @ApiProperty() federationId: string;
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
    | Prisma.FederationTrainersOrderByWithRelationInput
    | Prisma.FederationTrainersOrderByWithRelationInput[];
  @ApiProperty({ required: false })
  include?: Prisma.FederationTrainersInclude<DefaultArgs>;
}
