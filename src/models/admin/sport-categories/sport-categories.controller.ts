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
import { SportCategoriesService } from './sport-categories.service';
import { CreateSportCategoryDto } from './dto/create-sport-category.dto';
import { UpdateSportCategoryDto } from './dto/update-sport-category.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FindAllSportCategoriesDto } from './dto/sport-category.dto';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { Role } from '@prisma/client';
import { Roles } from 'src/decorator/roles.decorator';
import { ENDPOINT_SPORT_CATEGORIES } from 'src/tools/endpoints';

@ApiBearerAuth()
@Roles(Role.Admin)
@Controller(ENDPOINT_SPORT_CATEGORIES)
@ApiTags('Sport Categories')
export class SportCategoriesController {
  constructor(
    private readonly sportCategoriesService: SportCategoriesService,
  ) {}

  @Post()
  @UseInterceptors(ResponseInterceptor)
  create(@Body() data: CreateSportCategoryDto) {
    return this.sportCategoriesService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllSportCategoriesDto) {
    const { skip, take, where, include, orderBy } = query;

    return this.sportCategoriesService.findAll({
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
    return this.sportCategoriesService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(ResponseInterceptor)
  update(@Param('id') id: string, @Body() data: UpdateSportCategoryDto) {
    return this.sportCategoriesService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.sportCategoriesService.remove(id);
  }
}
