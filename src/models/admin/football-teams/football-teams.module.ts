import { Module } from '@nestjs/common';
import { FootballTeamsService } from './football-teams.service';
import { FootballTeamsController } from './football-teams.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FootballTeamsController],
  providers: [FootballTeamsService, PrismaService],
})
export class FootballTeamsModule {}
