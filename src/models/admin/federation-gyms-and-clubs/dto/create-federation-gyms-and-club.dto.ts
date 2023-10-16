import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class CreateFederationGymsAndClubDto
  implements Prisma.FederationGymsAndClubsCreateInput
{
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty() locationTm: string;
  @ApiProperty() locationRu: string;
  @ApiProperty() email: string;
  @ApiProperty() link: string;
  @ApiProperty() latitude: number;
  @ApiProperty() longitude: number;
  @ApiProperty({ type: [String] }) tel:
    | string[]
    | Prisma.FederationGymsAndClubsCreatetelInput;
  @ApiProperty({ type: [String] }) sportsTm:
    | string[]
    | Prisma.FederationGymsAndClubsCreatesportsTmInput;
  @ApiProperty({ type: [String] }) sportsRu:
    | string[]
    | Prisma.FederationGymsAndClubsCreatesportsRuInput;
  @ApiProperty({ type: [String] }) openAtTm:
    | string[]
    | Prisma.FederationGymsAndClubsCreateopenAtTmInput;
  @ApiProperty({ type: [String] }) openAtRu:
    | string[]
    | Prisma.FederationGymsAndClubsCreateopenAtRuInput;
  @ApiProperty({
    format: 'binary',
    type: 'string',
    description:
      'Max file size: 25MB. Expected file types: PNG, JPG, JPEG, JFIF, WEBP',
  })
  photo1: Express.Multer.File;
  @ApiProperty({
    format: 'binary',
    type: 'string',
    description:
      'Max file size: 25MB. Expected file types: PNG, JPG, JPEG, JFIF, WEBP',
  })
  photo2: Express.Multer.File;
  @ApiProperty({
    format: 'binary',
    type: 'string',
    description:
      'Max file size: 25MB. Expected file types: PNG, JPG, JPEG, JFIF, WEBP',
  })
  photo3: Express.Multer.File;
  @ApiProperty({
    format: 'binary',
    type: 'string',
    description:
      'Max file size: 25MB. Expected file types: PNG, JPG, JPEG, JFIF, WEBP',
  })
  photo4: Express.Multer.File;
  @ApiProperty({
    format: 'binary',
    type: 'string',
    description:
      'Max file size: 25MB. Expected file types: PNG, JPG, JPEG, JFIF, WEBP',
  })
  photo5: Express.Multer.File;
  imagePath1: string;
  imagePath2: string;
  imagePath3: string;
  imagePath4: string;
  imagePath5: string;
}

export class FindAllFederationGymsAndClubs
  implements Prisma.FederationGymsAndClubsFindManyArgs
{
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false })
  select?: Prisma.FederationGymsAndClubsSelect<DefaultArgs>;
  @ApiProperty({ required: false })
  where?: Prisma.FederationGymsAndClubsWhereInput;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.FederationGymsAndClubsOrderByWithRelationAndSearchRelevanceInput
    | Prisma.FederationGymsAndClubsOrderByWithRelationAndSearchRelevanceInput[];
}
