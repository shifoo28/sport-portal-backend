import { Module } from '@nestjs/common';
import { FederationAthleteService } from './federation-athlete.service';
import { FederationAthleteController } from './federation-athlete.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FederationAthleteController],
  providers: [FederationAthleteService, PrismaService],
})
export class FederationAthleteModule {}
