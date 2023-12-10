import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LangService } from './lang.service';
import { LangsController } from './langs.controller';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/guard/roles.guard';

@Module({
  exports: [LangService],
  providers: [
    LangService,
    PrismaService,
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
  controllers: [LangsController],
})
export class LangsModule {}
