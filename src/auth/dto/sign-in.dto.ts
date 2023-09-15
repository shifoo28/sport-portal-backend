import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty() name: string;
  @ApiProperty() surname: string;
  @ApiProperty({ description: 'Email must be valid!' }) email: string;
  @ApiProperty({ description: 'Parse to get User Information!' }) token: string;
}

export class SignInArgsDto {
  @ApiProperty({ description: 'Email must be valid!' }) email: string;
  @ApiProperty({ description: 'Enter your password!' }) plainPassword: string;
}
