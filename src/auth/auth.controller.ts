import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignInArgsDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signIn(@Body() data: SignInArgsDto) {
    return this.authService.signIn(data);
  }

  @Post('signup')
  signUp(@Body() data: SignUpDto) {
    return this.authService.signUp(data);
  }
}
