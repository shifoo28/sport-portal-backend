import { Module } from '@nestjs/common';
import { FederationHealthCareEmployeesService } from './federation-health-care-employees.service';
import { FederationHealthCareEmployeesController } from './federation-health-care-employees.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FederationHealthCareEmployeesController],
  providers: [FederationHealthCareEmployeesService, PrismaService],
})
export class FederationHealthCareEmployeesModule {}
