import { Module } from '@nestjs/common';
import { AthleteRatingsService } from './athlete-ratings.service';
import { AthleteRatingsController } from './athlete-ratings.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AthleteRatingsController],
  providers: [AthleteRatingsService, PrismaService],
})
export class AthleteRatingsModule {}
