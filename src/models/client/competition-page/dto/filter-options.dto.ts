import { ApiProperty } from '@nestjs/swagger';

export class FilterOptionsDto {
  @ApiProperty({ enum: ['Tm', 'Ru'] }) lang: 'Tm' | 'Ru';
  
}
