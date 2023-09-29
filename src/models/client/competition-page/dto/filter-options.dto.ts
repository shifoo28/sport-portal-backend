import { ApiProperty } from '@nestjs/swagger';
import { ELangs } from 'src/app.dto';

export class FilterOptionsDto {
  @ApiProperty({ enum: ['Tm', 'Ru'] }) lang: ELangs;
  @ApiProperty({ required: false }) competitionType: string;
  @ApiProperty({ required: false }) locations: string;
  @ApiProperty({ required: false }) name: string;
}
