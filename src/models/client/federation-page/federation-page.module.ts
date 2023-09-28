import { Module } from '@nestjs/common';
import { FederationPageService } from './federation-page.service';
import { FederationPageController } from './federation-page.controller';
import { PrismaService } from 'src/prisma.service';
import { FederationsService } from 'src/models/admin/federations/federations.service';

@Module({
  controllers: [FederationPageController],
  providers: [FederationPageService, PrismaService, FederationsService],
})
export class FederationPageModule {}
