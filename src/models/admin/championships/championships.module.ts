import { Module } from '@nestjs/common';
import { ChampionshipsService } from './championships.service';
import { ChampionshipsController } from './championships.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ChampionshipsController],
  providers: [ChampionshipsService, PrismaService],
})
export class ChampionshipsModule {}
