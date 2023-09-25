import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignInArgsDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';

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
}
