import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  Controller,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseCategoryService } from './base-category.service';
import { FindAllBaseCategoryDto } from './dto/base-category.dto';
import { CreateBaseCategoryDto } from './dto/create-base-category.dto';
import { UpdateBaseCategoryDto } from './dto/update-base-category.dto';

@Controller('base-category')
@ApiTags('Base Categries')
export class BaseCategoryController {
  constructor(private readonly baseCategoryService: BaseCategoryService) {}

  @Post()
  create(@Body() data: CreateBaseCategoryDto) {
    return this.baseCategoryService.create(data);
  }

  @Get()
  findAll(@Query() query: FindAllBaseCategoryDto) {
    const { skip, take, where } = query;

    return this.baseCategoryService.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      where,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baseCategoryService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateBaseCategoryDto) {
    return this.baseCategoryService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baseCategoryService.remove(id);
  }
}