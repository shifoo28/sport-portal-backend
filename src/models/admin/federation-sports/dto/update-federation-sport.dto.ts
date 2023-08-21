import { PartialType } from '@nestjs/swagger';
import { CreateFederationSportDto } from './create-federation-sport.dto';

export class UpdateFederationSportDto extends PartialType(CreateFederationSportDto) {}
