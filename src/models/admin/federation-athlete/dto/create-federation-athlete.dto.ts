import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class CreateFederationAthleteDto
  implements Prisma.FederationAthleteCreateInput
{
  @ApiProperty() age: number;
  @ApiProperty() birthPlace: string;
  @ApiProperty({ default: 0 }) experience?: number;
  @ApiProperty() sportLevel: string;
  @ApiProperty({ type: [String] }) workedAt:
    | string[]
    | Prisma.FederationAthleteCreateworkedAtInput;
  @ApiProperty({ type: [String] }) badges:
    | string[]
    | Prisma.FederationAthleteCreatebadgesInput;
  @ApiProperty({ type: Object }) links:
    | Prisma.NullTypes.JsonNull
    | Prisma.InputJsonValue;
  @ApiProperty() name: string;
  @ApiProperty() club: string;
  @ApiProperty() made: string;
  @ApiProperty() rating: number;
  @ApiProperty() position: string;
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
    | Prisma.FederationAthleteOrderByWithRelationInput
    | Prisma.FederationAthleteOrderByWithRelationInput[];
  @ApiProperty({ required: false })
  select?: Prisma.FederationAthleteSelect<DefaultArgs>;
  @ApiProperty({ required: false })
  include?: Prisma.FederationAthleteInclude<DefaultArgs>;
}
