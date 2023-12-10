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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';

@ApiBearerAuth()
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
    const { skip, take, select, orderBy } = query;

    return this.shopCategoriesService.findAll({
      skip: skip ? +skip : 1,
      take: take ? +take : undefined,
      where: { parentId: '0' },
      select,
      include: {
        shopCategory: {
          include: { shopCategory: { include: { shopCategory: true } } },
        },
      },
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
