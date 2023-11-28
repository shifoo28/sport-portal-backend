import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth.constants';
import { UsersService } from 'src/models/admin/users/users.service';
import { GoogleStrategy } from 'src/strategy/google.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UsersService, PrismaService, GoogleStrategy],
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
})
export class AuthModule {}
