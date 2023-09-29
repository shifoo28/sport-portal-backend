import { Module } from '@nestjs/common';
import { GymsAndClubsPageService } from './gyms-and-clubs-page.service';
import { GymsAndClubsPageController } from './gyms-and-clubs-page.controller';
import { PrismaService } from 'src/prisma.service';
import { FederationGymsAndClubsService } from 'src/models/admin/federation-gyms-and-clubs/federation-gyms-and-clubs.service';
import { SportTypesService } from 'src/models/admin/sport-types/sport-types.service';

@Module({
  controllers: [GymsAndClubsPageController],
  providers: [
    GymsAndClubsPageService,
    PrismaService,
    FederationGymsAndClubsService,
    SportTypesService,
  ],
})
export class GymsAndClubsPageModule {}
