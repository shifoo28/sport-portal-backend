import { Module } from '@nestjs/common';
import { TrainerRatingsService } from './trainer-ratings.service';
import { TrainerRatingsController } from './trainer-ratings.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TrainerRatingsController],
  providers: [TrainerRatingsService, PrismaService],
})
export class TrainerRatingsModule {}
