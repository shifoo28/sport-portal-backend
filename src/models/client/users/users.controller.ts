import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, FindAllUsersDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { ResponseInterceptor } from 'src/respone/response.interceptor';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseInterceptors(ResponseInterceptor)
  create(@Body() data: CreateUserDto) {
    return this.usersService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllUsersDto) {
    const { skip, take, where, select, orderBy } = query;

    return this.usersService.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      where,
      select,
      orderBy,
    });
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne({ id });
  }

  @Patch(':id')
  @UseInterceptors(ResponseInterceptor)
  update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.usersService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
