import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GoogleOAuthGuard extends AuthGuard('google') {
  constructor() {
    super({ //private configService: ConfigService
      accessType: 'offline',
    });
  }
}