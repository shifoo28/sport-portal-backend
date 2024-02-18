import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Prisma } from '@prisma/client';

export class CreateChampionshipDto implements Prisma.ChampionshipsCreateInput {
  @ApiProperty() nameTm: string;
  @ApiProperty() nameRu: string;
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description:
      'Max file size: 25MB. expected file types: PNG, JPG, JPEG, JFIF, WEBP',
    required: false,
  })
  photo?: Express.Multer.File;
  imagePath?: string;
  team?: Prisma.TeamsCreateNestedManyWithoutChamionshipInput;
  @ApiProperty({ enum: $Enums.Statistics }) type: $Enums.Statistics;
}
