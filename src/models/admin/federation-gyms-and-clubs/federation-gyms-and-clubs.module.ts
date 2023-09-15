import { Module } from '@nestjs/common';
import { FederationGymsAndClubsService } from './federation-gyms-and-clubs.service';
import { FederationGymsAndClubsController } from './federation-gyms-and-clubs.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FederationGymsAndClubsController],
  providers: [FederationGymsAndClubsService, PrismaService],
})
export class FederationGymsAndClubsModule {}
