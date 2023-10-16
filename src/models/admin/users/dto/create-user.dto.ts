import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export class CreateUserDto implements Prisma.UsersCreateInput {
  @ApiProperty() name: string;
  @ApiProperty() surname: string;
  @ApiProperty({ description: 'Email must be validated!' }) email: string;
  @ApiProperty({ description: 'Unique password recommended!' })
  password: string;
}

export class FindAllUsersDto implements Prisma.UsersFindManyArgs {
  @ApiProperty({ required: false }) skip?: number;
  @ApiProperty({ required: false }) take?: number;
  @ApiProperty({ required: false }) where?: Prisma.UsersWhereInput;
  @ApiProperty({ required: false }) select?: Prisma.UsersSelect<DefaultArgs>;
  @ApiProperty({ required: false }) orderBy?:
    | Prisma.UsersOrderByWithRelationAndSearchRelevanceInput
    | Prisma.UsersOrderByWithRelationAndSearchRelevanceInput[];
}

export class FindOneUserDto {
  @ApiProperty({ required: false }) id?: string;
  @ApiProperty({ required: false }) email?: string;
}
