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
import { CompetitionTypesService } from './competition-types.service';
import {
  CreateCompetitionTypeDto,
  FindAllCompetitionTypesDto,
} from './dto/create-competition-type.dto';
import { UpdateCompetitionTypeDto } from './dto/update-competition-type.dto';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';

@Controller('competition-types')
@ApiTags('Competition Types')
export class CompetitionTypesController {
  constructor(
    private readonly competitionTypesService: CompetitionTypesService,
  ) {}

  @Post()
  @UseInterceptors(ResponseInterceptor)
  create(@Body() data: CreateCompetitionTypeDto) {
    return this.competitionTypesService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllCompetitionTypesDto) {
    const { skip, take, where, select, include, orderBy } = query;

    return this.competitionTypesService.findAll({
      skip: skip ? +skip : undefined,
      take: take ? +take : undefined,
      where,
      select,
      include,
      orderBy,
    });
  }

  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.competitionTypesService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(ResponseInterceptor)
  update(@Param('id') id: string, @Body() data: UpdateCompetitionTypeDto) {
    return this.competitionTypesService.update(+id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.competitionTypesService.remove(+id);
  }
}
