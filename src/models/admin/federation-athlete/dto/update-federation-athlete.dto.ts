import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFederationAthleteDto } from './create-federation-athlete.dto';

export class UpdateFederationAthleteDto extends PartialType(
  CreateFederationAthleteDto,
) {
  @ApiProperty() rating: number;
}
