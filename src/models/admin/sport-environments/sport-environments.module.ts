import { Module } from '@nestjs/common';
import { SportEnvironmentsService } from './sport-environments.service';
import { SportEnvironmentsController } from './sport-environments.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SportEnvironmentsController],
  providers: [SportEnvironmentsService, PrismaService],
})
export class SportEnvironmentsModule {}
