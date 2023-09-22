import { Injectable } from '@nestjs/common';
import {
  CreateUserDto,
  FindAllUsersDto,
  FindOneUserDto,
} from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateUserDto): Promise<UserEntity> {
    const { name, surname, email, password } = data;

    return this.prismaService.users.create({
      data: { name, surname, email, password },
    });
  }

  async findAll(query: FindAllUsersDto): Promise<UserEntity[]> {
    return this.prismaService.users.findMany(query);
  }

  async findOne(query: FindOneUserDto): Promise<UserEntity> {
    const { id, email } = query;

    return this.prismaService.users.findUnique({
      where: { id, email },
    });
  }

  async update(id: string, data: UpdateUserDto): Promise<UserEntity> {
    const { name, surname, email, password } = data;

    return this.prismaService.users.update({
      where: { id },
      data: { name, surname, email, password },
    });
  }

  async remove(id: string): Promise<UserEntity> {
    return this.prismaService.users.delete({ where: { id } });
  }
}
