import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateTeamDto implements Prisma.TeamsCreateInput {
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty({ required: false, default: 1 }) played: number;
  @ApiProperty({ required: false, default: 0 }) win: number;
  @ApiProperty({ required: false, default: 0 }) draw: number;
  @ApiProperty({ required: false, default: 0 }) loss: number;
  @ApiProperty({ required: false, default: 0 }) goalsScored: number;
  @ApiProperty({ required: false, default: 0 }) goalsAgainst: number;
  @ApiProperty({ required: false, default: 0 }) points: number;
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description:
      'Max file size: 25Mb. Expected file types PNG, JPG, JPEG, WEBP, JFIF',
    required: false,
  })
  photo: Express.Multer.File;
  imagePath?: string;
  chamionship: Prisma.ChampionshipsCreateNestedOneWithoutTeamInput;
  @ApiProperty() championshipId: string;
}
