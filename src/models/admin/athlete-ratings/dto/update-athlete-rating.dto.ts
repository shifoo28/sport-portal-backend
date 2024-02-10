import { PartialType } from '@nestjs/swagger';
import { CreateAthleteRatingDto } from './create-athlete-rating.dto';

export class UpdateAthleteRatingDto extends PartialType(CreateAthleteRatingDto) {}
