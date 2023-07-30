import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NewsCategoryService } from './news-category.service';
import { CreateNewsCategoryDto } from './dto/create-news-category.dto';
import { UpdateNewsCategoryDto } from './dto/update-news-category.dto';
import { FindAllNewsCategoryDto } from './dto/news-category.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('news-category')
@ApiTags('News Categories')
export class NewsCategoryController {
  constructor(private readonly newsCategoryService: NewsCategoryService) {}

  @Post()
  create(@Body() data: CreateNewsCategoryDto) {
    return this.newsCategoryService.create(data);
  }

  @Get()
  findAll(@Param() param: FindAllNewsCategoryDto) {
    return this.newsCategoryService.findAll(param);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateNewsCategoryDto) {
    return this.newsCategoryService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsCategoryService.remove(+id);
  }
}
