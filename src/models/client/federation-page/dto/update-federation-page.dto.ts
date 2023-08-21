import { PartialType } from '@nestjs/swagger';
import { CreateFederationPageDto } from './create-federation-page.dto';

export class UpdateFederationPageDto extends PartialType(CreateFederationPageDto) {}
