import { Module } from '@nestjs/common';
import { EmployeeRatingsService } from './employee-ratings.service';
import { EmployeeRatingsController } from './employee-ratings.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EmployeeRatingsController],
  providers: [EmployeeRatingsService, PrismaService],
})
export class EmployeeRatingsModule {}
