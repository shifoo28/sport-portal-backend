import { PartialType } from '@nestjs/swagger';
import { CreateFootballTeamDto } from './create-football-team.dto';

export class UpdateFootballTeamDto extends PartialType(CreateFootballTeamDto) {}
