import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/models/client/users/users.service';
import { SignInArgsDto, SignInDto } from './dto/sign-in.dto';
import { SignUpDto, SignedUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async signIn(args: SignInArgsDto): Promise<SignInDto> {
    const { email, plainPassword } = args;
    const user = await this.userService.findOne({ email });
    if (!user) throw new NotFoundException();

    const { password, ...result } = user;
    if (plainPassword !== password) throw new UnauthorizedException();

    return { ...result, token: '' };
  }

  async signUp(data: SignUpDto): Promise<SignedUpDto> {
    const { name, surname, email, plainPassword } = data;
    const user = await this.userService.create({
      name,
      surname,
      email,
      password: plainPassword,
    });
    const { password, ...result } = user;

    return { message: '', user: result };
  }
}
