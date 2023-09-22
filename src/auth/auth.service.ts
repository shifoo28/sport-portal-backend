import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/models/client/users/users.service';
import { SignInArgsDto, SignInDto } from './dto/sign-in.dto';
import { SignUpDto, SignedUpDto } from './dto/sign-up.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(args: SignInArgsDto): Promise<SignInDto> {
    const { email, plainPassword } = args;
    const user = await this.userService.findOne({ email });
    if (!user) throw new NotFoundException();

    const { password, ...result } = user;
    if (plainPassword !== password) throw new UnauthorizedException();

    return { ...result, token: await this.jwtService.signAsync({ ...result }) };
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
