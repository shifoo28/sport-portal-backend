import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LangService } from './lang.service';
import { LangsController } from './langs.controller';

@Module({
  exports: [LangService],
  providers: [LangService, PrismaService],
  controllers: [LangsController]
})
export class LangsModule {}
