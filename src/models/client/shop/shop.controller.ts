import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';
import { ApiTags } from '@nestjs/swagger';
import { LangQueryDto } from 'src/app.dto';
import { Public } from 'src/decorator/public-route.decorator';

@Public()
@Controller('shop')
@ApiTags('Shop Page')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get('filters')
  @UseInterceptors(ResponseInterceptor)
  async getShopFilters(@Query() query: LangQueryDto) {
    const shop_categories = await this.shopService.getShopCategories(query);

    return { name: 'shop_categories', filters: shop_categories };
  }
}
