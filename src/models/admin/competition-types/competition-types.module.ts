import { Module } from '@nestjs/common';
import { CompetitionTypesService } from './competition-types.service';
import { CompetitionTypesController } from './competition-types.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CompetitionTypesController],
  providers: [CompetitionTypesService, PrismaService],
})
export class CompetitionTypesModule {}
