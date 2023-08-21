import { Module } from '@nestjs/common';
import { FederationSportsService } from './federation-sports.service';
import { FederationSportsController } from './federation-sports.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FederationSportsController],
  providers: [FederationSportsService, PrismaService]
})
export class FederationSportsModule {}
