import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateCompetitionDto implements Prisma.CompetitionsCreateInput {
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty() textTm: string;
  @ApiProperty() textRu: string;
  @ApiProperty() venueTm: string;
  @ApiProperty() venueRu: string;
  @ApiProperty() locationTm: string;
  @ApiProperty() locationRu: string;
  @ApiProperty({ type: 'string' || 'Date', default: new Date() }) startDate:
    | string
    | Date;
  @ApiProperty({ type: 'string' || 'Date', default: new Date() }) endDate:
    | string
    | Date;
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description:
      'Max file size: 25MB. Expected file types: PNG, JPG, JPEG, JFIF, WEBP',
  })
  photo: Express.Multer.File;
  imagePath: string;
  @ApiProperty() typeId: number;
  competitionType: Prisma.CompetitionTypesCreateNestedOneWithoutCompetitionInput;
}
