import { Module } from '@nestjs/common';
import { FederationsService } from './federations.service';
import { FederationsController } from './federations.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FederationsController],
  providers: [FederationsService, PrismaService],
})
export class FederationsModule {}
