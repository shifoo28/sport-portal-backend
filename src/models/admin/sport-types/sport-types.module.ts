import { Module } from '@nestjs/common';
import { SportTypesService } from './sport-types.service';
import { SportTypesController } from './sport-types.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SportTypesController],
  providers: [SportTypesService, PrismaService],
})
export class SportTypesModule {}
