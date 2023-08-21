import { Module } from '@nestjs/common';
import { FederationTrainersService } from './federation-trainers.service';
import { FederationTrainersController } from './federation-trainers.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FederationTrainersController],
  providers: [FederationTrainersService, PrismaService],
})
export class FederationTrainersModule {}
