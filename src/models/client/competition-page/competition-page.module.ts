import { Module } from '@nestjs/common';
import { CompetitionPageService } from './competition-page.service';
import { CompetitionPageController } from './competition-page.controller';
import { CompetitionsService } from 'src/models/admin/competitions/competitions.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CompetitionPageController],
  providers: [CompetitionPageService, CompetitionsService, PrismaService],
})
export class CompetitionPageModule {}
