import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  Controller,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BaseCategoryService } from './base-category.service';
import { FindAllBaseCategoryDto } from './dto/base-category.dto';
import { CreateBaseCategoryDto } from './dto/create-base-category.dto';
import { UpdateBaseCategoryDto } from './dto/update-base-category.dto';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';
import { Role } from '@prisma/client';
import { Roles } from 'src/decorator/roles.decorator';

@ApiBearerAuth()
@Roles(Role.Admin)
@Controller('base-category')
@ApiTags('Base Categries')
export class BaseCategoryController {
  constructor(private readonly baseCategoryService: BaseCategoryService) {}

  @Post()
  @UseInterceptors(ResponseInterceptor)
  create(@Body() data: CreateBaseCategoryDto) {
    return this.baseCategoryService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllBaseCategoryDto) {
    const { skip, take, where } = query;

    return this.baseCategoryService.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      where,
    });
  }

  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.baseCategoryService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(ResponseInterceptor)
  update(@Param('id') id: string, @Body() data: UpdateBaseCategoryDto) {
    return this.baseCategoryService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.baseCategoryService.remove(id);
  }
}
