import { PartialType } from '@nestjs/swagger';
import { CreateSportEnvironmentDto } from './create-sport-environment.dto';

export class UpdateSportEnvironmentDto extends PartialType(CreateSportEnvironmentDto) {}
