import { Module } from '@nestjs/common';
import { HealthCareDepartmentsService } from './health-care-departments.service';
import { HealthCareDepartmentsController } from './health-care-departments.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [HealthCareDepartmentsController],
  providers: [HealthCareDepartmentsService, PrismaService],
})
export class HealthCareDepartmentsModule {}
