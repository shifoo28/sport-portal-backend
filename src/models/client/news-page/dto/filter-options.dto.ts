import { ApiProperty } from '@nestjs/swagger';
import { ELangs } from 'src/app.dto';

export class FilterOptions {
  @ApiProperty({ enum: ELangs }) lang: ELangs;
}
