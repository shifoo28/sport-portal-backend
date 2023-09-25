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
import { ShopCategoriesService } from './shop-categories.service';
import {
  CreateShopCategoryDto,
  FindAllShopCategoriesDto,
} from './dto/create-shop-category.dto';
import { UpdateShopCategoryDto } from './dto/update-shop-category.dto';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';

@Controller('shop-categories')
@ApiTags('Shop Categories')
export class ShopCategoriesController {
  constructor(private readonly shopCategoriesService: ShopCategoriesService) {}

  @Post()
  @UseInterceptors(ResponseInterceptor)
  create(@Body() data: CreateShopCategoryDto) {
    return this.shopCategoriesService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllShopCategoriesDto) {
    const { skip, take, where, select, include, orderBy } = query;

    return this.shopCategoriesService.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      where,
      select,
      include,
      orderBy,
    });
  }

  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.shopCategoriesService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(ResponseInterceptor)
  update(@Param('id') id: string, @Body() data: UpdateShopCategoryDto) {
    return this.shopCategoriesService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.shopCategoriesService.remove(id);
  }
}
