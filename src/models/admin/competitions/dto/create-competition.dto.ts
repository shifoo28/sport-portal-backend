import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class CreateCompetitionDto implements Prisma.CompetitionsCreateInput {
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty() textTm: string;
  @ApiProperty() textRu: string;
  @ApiProperty() locationTm: string;
  @ApiProperty() locationRu: string;
  @ApiProperty({ type: 'string' || 'Date', default: new Date() }) dateStart:
    | string
    | Date;
  @ApiProperty({ type: 'string' || 'Date', default: new Date() }) dateEnd:
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
  views?: number;
  @ApiProperty() typeId: number;
  competitionType: Prisma.CompetitionTypesCreateNestedOneWithoutCompetitionInput;
}

export class FindAllCompetitionsDto implements Prisma.CompetitionsFindManyArgs {
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.CompetitionsWhereInput;
  @ApiProperty({ required: false })
  select?: Prisma.CompetitionsSelect<DefaultArgs>;
  @ApiProperty({ required: false })
  include?: Prisma.CompetitionsInclude<DefaultArgs>;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.CompetitionsOrderByWithRelationInput
    | Prisma.CompetitionsOrderByWithRelationInput[];
}
