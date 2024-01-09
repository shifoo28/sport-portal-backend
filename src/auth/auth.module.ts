import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from 'src/models/admin/users/users.service';
import { GoogleStrategy } from 'src/strategy/google.strategy';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/guard/auth.guard';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    PrismaService,
    GoogleStrategy,
    { provide: APP_GUARD, useClass: AuthGuard },
  ],
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_CONSTANT,
      signOptions: { expiresIn: '30d' },
    }),
  ],
})
export class AuthModule {}
