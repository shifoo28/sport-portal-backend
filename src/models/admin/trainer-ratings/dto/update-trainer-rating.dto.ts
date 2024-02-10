import { PartialType } from '@nestjs/swagger';
import { CreateTrainerRatingDto } from './create-trainer-rating.dto';

export class UpdateTrainerRatingDto extends PartialType(CreateTrainerRatingDto) {}
