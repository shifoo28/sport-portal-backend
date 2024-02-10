import { PartialType } from '@nestjs/swagger';
import { CreateEmployeeRatingDto } from './create-employee-rating.dto';

export class UpdateEmployeeRatingDto extends PartialType(CreateEmployeeRatingDto) {}
