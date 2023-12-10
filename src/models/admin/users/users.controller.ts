import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, FindAllUsersDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from '@prisma/client';

@ApiBearerAuth()
@Roles(Role.Developer)
@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseInterceptors(ResponseInterceptor)
  async create(@Body() data: CreateUserDto) {
    const user = await this.usersService.create(data);
    const { password, ...result } = user;
    return { result };
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllUsersDto) {
    const { skip, take, where, orderBy } = query;

    return this.usersService.findAll({
      skip: skip ? +skip : undefined,
      take: take ? +take : undefined,
      where,
      select: { id: true, name: true, surname: true, email: true },
      orderBy,
    });
  }

  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne({ id });
    const { password, ...result } = user;

    return { result };
  }

  @Patch(':id')
  @UseInterceptors(ResponseInterceptor)
  async update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    const user = await this.usersService.update(id, data);
    const { password, ...result } = user;

    return { result };
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  async remove(@Param('id') id: string) {
    const user = await this.usersService.remove(id);
    const { password, ...result } = user;
    return { result };
  }
}
