import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFederationTrainerDto } from './create-federation-trainer.dto';

export class UpdateFederationTrainerDto extends PartialType(
  CreateFederationTrainerDto,
) {
  @ApiProperty({ required: false, default: 4.5 }) rating?: number;
}
