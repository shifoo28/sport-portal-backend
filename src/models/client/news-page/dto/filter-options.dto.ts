import { ApiProperty } from '@nestjs/swagger';
import { Sections } from '@prisma/client';
import { ELangs } from 'src/app.dto';

export class GetFilterOptions {
  @ApiProperty({ enum: ELangs }) lang: ELangs;
  @ApiProperty({ required: false, type: Sections }) section: Sections;
}

export class PostFilterOptions {
  @ApiProperty({ enum: ELangs, description: 'Filter option-lar haysy dilde?' })
  lang: ELangs;
  @ApiProperty({ required: false, description: 'Sport category id ugratmaly!' })
  sportCategories: string;
  @ApiProperty({ required: false, type: Sections }) section: Sections;
}
