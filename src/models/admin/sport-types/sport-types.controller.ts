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
import { ApiTags } from '@nestjs/swagger';

@Controller('sport-types')
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
      skip: skip ? +skip : undefined,
      take: take ? +take : undefined,
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
