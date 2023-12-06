import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignInArgsDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';
import { GoogleOAuthGuard } from 'src/guard/google-oauth.guard';
import { Public } from 'src/tools/public-route';

@Public()
@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @UseInterceptors(ResponseInterceptor)
  signIn(@Body() data: SignInArgsDto) {
    return this.authService.signIn(data);
  }

  @Post('signup')
  @UseInterceptors(ResponseInterceptor)
  signUp(@Body() data: SignUpDto) {
    return this.authService.signUp(data);
  }

  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth() {}

  @Get('google-redirect')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req) {
    return this.authService.googleLogin(req);
  }
}
