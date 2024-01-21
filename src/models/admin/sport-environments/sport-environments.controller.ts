import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { SportEnvironmentsService } from './sport-environments.service';
import { CreateSportEnvironmentDto } from './dto/create-sport-environment.dto';
import { UpdateSportEnvironmentDto } from './dto/update-sport-environment.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from '@prisma/client';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { FindAllSportEnvironmentsDto } from './dto/find-sport-environment.dto';

@ApiBearerAuth()
@Roles(Role.Admin)
@Controller('sport-environments')
@ApiTags('Sport Environments')
export class SportEnvironmentsController {
  constructor(
    private readonly sportEnvironmentsService: SportEnvironmentsService,
  ) {}

  @Post()
  @UseInterceptors(ResponseInterceptor)
  create(@Body() data: CreateSportEnvironmentDto) {
    return this.sportEnvironmentsService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllSportEnvironmentsDto) {
    const { skip, take, where, include, orderBy } = query;

    return this.sportEnvironmentsService.findAll({
      skip: skip && +skip,
      take: take && +take,
      where,
      include,
      orderBy,
    });
  }

  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.sportEnvironmentsService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(ResponseInterceptor)
  update(@Param('id') id: string, @Body() data: UpdateSportEnvironmentDto) {
    return this.sportEnvironmentsService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.sportEnvironmentsService.remove(id);
  }
}
