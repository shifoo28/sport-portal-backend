import { PartialType } from '@nestjs/swagger';
import { CreateFederationTrainerDto } from './create-federation-trainer.dto';

export class UpdateFederationTrainerDto extends PartialType(CreateFederationTrainerDto) {}
