import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class CreateFederationAthleteDto
  implements Prisma.FederationAthleteCreateInput
{
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty() age: number;
  @ApiProperty() madeTm: string;
  @ApiProperty() madeRu: string;
  @ApiProperty() birthPlaceTm: string;
  @ApiProperty() birthPlaceRu: string;
  @ApiProperty() club: string;
  @ApiProperty() rating: number;
  @ApiProperty() jobTm: string;
  @ApiProperty() jobRu: string;
  @ApiProperty() positionTm: string;
  @ApiProperty() positionRu: string;
  @ApiProperty() sportLevelTm: string;
  @ApiProperty() sportLevelRu: string;
  @ApiProperty({ type: [String] }) workedAtTm:
    | Prisma.FederationAthleteCreateworkedAtTmInput
    | string[];
  @ApiProperty({ type: [String] }) workedAtRu:
    | Prisma.FederationAthleteCreateworkedAtRuInput
    | string[];
  @ApiProperty({ type: [String] }) badgesTm:
    | Prisma.FederationAthleteCreatebadgesTmInput
    | string[];
  @ApiProperty({ type: [String] }) badgesRu:
    | Prisma.FederationAthleteCreatebadgesRuInput
    | string[];
  @ApiProperty({ default: 0 }) experience?: number;
  @ApiProperty({ type: Object }) links:
    | Prisma.NullTypes.JsonNull
    | Prisma.InputJsonValue;
  @ApiProperty() federationId: string;
  @ApiProperty({
    format: 'binary',
    type: 'string',
    description:
      'Max file size: 25MB. Expected file types: PNG, JPG, JPEG, JFIF, WEBP',
  })
  photo: Express.Multer.File;
  imagePath: string;
  federation: Prisma.FederationsCreateNestedOneWithoutFathleteInput;
}

export class FindAllFederationAthleteDto
  implements Prisma.FederationAthleteFindManyArgs
{
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.FederationAthleteWhereInput;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.FederationAthleteOrderByWithRelationAndSearchRelevanceInput
    | Prisma.FederationAthleteOrderByWithRelationAndSearchRelevanceInput[];
  @ApiProperty({ required: false })
  select?: Prisma.FederationAthleteSelect<DefaultArgs>;
  @ApiProperty({ required: false })
  include?: Prisma.FederationAthleteInclude<DefaultArgs>;
}
