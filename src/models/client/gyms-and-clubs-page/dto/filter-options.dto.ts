import { ApiProperty } from '@nestjs/swagger';

export class FilterOptionsDto {
  @ApiProperty({ enum: ['Tm', 'Ru'] }) lang: 'Tm' | 'Ru';
  @ApiProperty({ required: false }) location: string;
  @ApiProperty({ required: false }) sportType: string;
  @ApiProperty({ required: false }) name: string;
}
