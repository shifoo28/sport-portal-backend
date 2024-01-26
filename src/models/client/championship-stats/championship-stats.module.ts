import { Module } from '@nestjs/common';
import { ChampionshipStatsService } from './championship-stats.service';
import { ChampionshipStatsController } from './championship-stats.controller';
import { ChampionshipsService } from 'src/models/admin/championships/championships.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ChampionshipStatsController],
  providers: [ChampionshipStatsService, ChampionshipsService, PrismaService],
})
export class ChampionshipStatsModule {}
