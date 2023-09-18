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
import { CompetitionTypesService } from './competition-types.service';
import {
  CreateCompetitionTypeDto,
  FindAllCompetitionTypesDto,
} from './dto/create-competition-type.dto';
import { UpdateCompetitionTypeDto } from './dto/update-competition-type.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('competition-types')
@ApiTags('Competition Types')
export class CompetitionTypesController {
  constructor(
    private readonly competitionTypesService: CompetitionTypesService,
  ) {}

  @Post()
  create(@Body() data: CreateCompetitionTypeDto) {
    return this.competitionTypesService.create(data);
  }

  @Get()
  findAll(@Query() query: FindAllCompetitionTypesDto) {
    const { skip, take, where, select, include, orderBy } = query;

    return this.competitionTypesService.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      where,
      select,
      include,
      orderBy,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.competitionTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateCompetitionTypeDto) {
    return this.competitionTypesService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.competitionTypesService.remove(+id);
  }
}
