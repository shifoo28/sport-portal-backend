import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignInArgsDto, SignInDto } from './dto/sign-in.dto';
import { SignUpDto, SignedUpDto } from './dto/sign-up.dto';
import { UsersService } from 'src/models/admin/users/users.service';

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
    if (!(await bcrypt.compare(plainPassword, password)))
      throw new UnauthorizedException();

    return { ...result, token: await this.jwtService.signAsync({ ...result }) };
  }

  async signUp(data: SignUpDto): Promise<SignedUpDto> {
    const { name, surname, email, plainPassword } = data;
    const hashed_password = await bcrypt.hash(plainPassword, 10);
    const user = await this.userService.create({
      name,
      surname,
      email,
      password: hashed_password,
    });
    const { password, ...result } = user;

    return { message: '', user: result };
  }

  async googleLogin(req: any) {
    if (!req.user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}
