import { PartialType } from '@nestjs/swagger';
import { CreateFederationGymsAndClubDto } from './create-federation-gyms-and-club.dto';

export class UpdateFederationGymsAndClubDto extends PartialType(
  CreateFederationGymsAndClubDto,
) {
  views?: number;
}
