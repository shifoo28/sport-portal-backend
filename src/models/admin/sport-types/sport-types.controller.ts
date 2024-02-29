import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SportTypesService } from './sport-types.service';
import {
  CreateSportTypeDto,
  FindAllSportTypesDto,
} from './dto/create-sport-type.dto';
import { UpdateSportTypeDto } from './dto/update-sport-type.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { Roles } from 'src/decorator/roles.decorator';
import { ENDPOINT_SPORT_TYPES } from 'src/tools/endpoints';

@ApiBearerAuth()
@Roles(Role.Admin)
@Controller(ENDPOINT_SPORT_TYPES)
@ApiTags('Sport Types')
export class SportTypesController {
  constructor(private readonly sportTypesService: SportTypesService) {}

  @Post()
  create(@Body() data: CreateSportTypeDto) {
    return this.sportTypesService.create(data);
  }

  @Get()
  findAll(@Query() query: FindAllSportTypesDto) {
    const { skip, take, where, select, orderBy } = query;

    return this.sportTypesService.findAll({
      skip: skip && +skip,
      take: take && +take,
      where,
      select,
      orderBy,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sportTypesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateSportTypeDto) {
    return this.sportTypesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sportTypesService.remove(id);
  }
}
