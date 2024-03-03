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
  environment?: Prisma.SportEnvironmentCreateNestedOneWithoutGymsandclubsInput;
  @ApiProperty() environmentId: string;
  venue?: Prisma.VenuesCreateNestedOneWithoutGymsAndClubsInput;
  @ApiProperty() venueId: string;
  imagePath1: string;
  imagePath2: string;
  imagePath3: string;
  imagePath4: string;
  imagePath5: string;
}

export interface ITypeOfFiles {
  photo1: Express.Multer.File[];
  photo2: Express.Multer.File[];
  photo3: Express.Multer.File[];
  photo4: Express.Multer.File[];
  photo5: Express.Multer.File[];
}
