import { Module } from '@nestjs/common';
import { HcdepartmentPageService } from './hcdepartment-page.service';
import { HcdepartmentPageController } from './hcdepartment-page.controller';
import { HealthCareDepartmentsService } from 'src/models/admin/health-care-departments/health-care-departments.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [HcdepartmentPageController],
  providers: [
    HcdepartmentPageService,
    HealthCareDepartmentsService,
    PrismaService,
  ],
})
export class HcdepartmentPageModule {}
