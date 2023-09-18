import { PartialType } from '@nestjs/swagger';
import { CreateCompetitionPageDto } from './create-competition-page.dto';

export class UpdateCompetitionPageDto extends PartialType(CreateCompetitionPageDto) {}
