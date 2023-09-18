import { Module } from '@nestjs/common';
import { CompetitionsService } from './competitions.service';
import { CompetitionsController } from './competitions.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CompetitionsController],
  providers: [CompetitionsService, PrismaService],
})
export class CompetitionsModule {}
