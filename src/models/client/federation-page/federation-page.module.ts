import { Module } from '@nestjs/common';
import { FederationPageService } from './federation-page.service';
import { FederationPageController } from './federation-page.controller';
import { FederationSportsService } from 'src/models/admin/federation-sports/federation-sports.service';
import { PrismaService } from 'src/prisma.service';
import { FederationsService } from 'src/models/admin/federations/federations.service';
import { FederationTrainersService } from 'src/models/admin/federation-trainers/federation-trainers.service';
import { FederationAthleteService } from 'src/models/admin/federation-athlete/federation-athlete.service';
import { HealthCareDepartmentsService } from 'src/models/admin/health-care-departments/health-care-departments.service';

@Module({
  controllers: [FederationPageController],
  providers: [
    FederationPageService,
    FederationSportsService,
    PrismaService,
    FederationsService,
    FederationTrainersService,
    FederationAthleteService,
    HealthCareDepartmentsService,
  ],
})
export class FederationPageModule {}
