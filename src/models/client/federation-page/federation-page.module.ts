import { Module } from '@nestjs/common';
import { FederationPageService } from './federation-page.service';
import { FederationPageController } from './federation-page.controller';
import { FederationSportsService } from 'src/models/admin/federation-sports/federation-sports.service';
import { PrismaService } from 'src/prisma.service';
import { FederationsService } from 'src/models/admin/federations/federations.service';

@Module({
  controllers: [FederationPageController],
  providers: [
    FederationPageService,
    FederationSportsService,
    PrismaService,
    FederationsService,
  ],
})
export class FederationPageModule {}
