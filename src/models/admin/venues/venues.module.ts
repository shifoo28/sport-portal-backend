import { Module } from '@nestjs/common';
import { VenuesService } from './venues.service';
import { VenuesController } from './venues.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [VenuesController],
  providers: [VenuesService, PrismaService],
})
export class VenuesModule {}
