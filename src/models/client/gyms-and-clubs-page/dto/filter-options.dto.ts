import { ApiProperty } from '@nestjs/swagger';
import { ELangs } from 'src/app.dto';

export class FilterOptionsDto {
  @ApiProperty({
    enum: ['Tm', 'Ru'],
    description: 'Filterleri haysy dilde ugradyan?',
  })
  lang: ELangs;
  @ApiProperty({ required: false }) locations: string;
  @ApiProperty({ required: false, description: 'Case sensitive DAL!!!!' })
  sports: string;
  @ApiProperty({ required: false }) name: string;
}
