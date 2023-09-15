import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
  @ApiProperty() name: string;
  @ApiProperty() surname: string;
  @ApiProperty({ description: 'Email must be valid!' }) email: string;
  @ApiProperty({ description: 'Provide strong password!' })
  plainPassword: string;
}

export class SignedUpDto {
  message: string;
  user: {
    id: string;
    name: string;
    surname: string;
    email: string;
  };
}
