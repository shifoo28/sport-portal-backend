import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SportCategoriesService } from './sport-categories.service';
import { CreateSportCategoryDto } from './dto/create-sport-category.dto';
import { UpdateSportCategoryDto } from './dto/update-sport-category.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('sport-categories')
@ApiTags('Sport Categories')
export class SportCategoriesController {
  constructor(
    private readonly sportCategoriesService: SportCategoriesService,
  ) {}

  @Post()
  create(@Body() createSportCategoryDto: CreateSportCategoryDto) {
    return this.sportCategoriesService.create(createSportCategoryDto);
  }

  @Get()
  findAll() {
    return this.sportCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sportCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSportCategoryDto: UpdateSportCategoryDto,
  ) {
    return this.sportCategoriesService.update(+id, updateSportCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sportCategoriesService.remove(+id);
  }
}
