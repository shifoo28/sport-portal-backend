import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCompetitionDto } from './create-competition.dto';

export class UpdateCompetitionDto extends PartialType(CreateCompetitionDto) {
  @ApiProperty({ required: false }) views?: number;
}
