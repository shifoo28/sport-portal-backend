import { ApiProperty } from '@nestjs/swagger';

export class FilterOptionsDto {
  @ApiProperty({ enum: ['Tm', 'Ru'] }) lang: 'Tm' | 'Ru';
  @ApiProperty({ required: false }) competitionType: string;
  @ApiProperty({ required: false }) location: string;
}
