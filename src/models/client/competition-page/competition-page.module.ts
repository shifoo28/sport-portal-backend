import { Module } from '@nestjs/common';
import { CompetitionPageService } from './competition-page.service';
import { CompetitionPageController } from './competition-page.controller';
import { CompetitionsService } from 'src/models/admin/competitions/competitions.service';
import { PrismaService } from 'src/prisma.service';
import { CompetitionTypesService } from 'src/models/admin/competition-types/competition-types.service';
import { VenuesService } from 'src/models/admin/venues/venues.service';

@Module({
  controllers: [CompetitionPageController],
  providers: [
    CompetitionPageService,
    CompetitionsService,
    CompetitionTypesService,
    VenuesService,
    PrismaService,
  ],
})
export class CompetitionPageModule {}
