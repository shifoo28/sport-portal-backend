import { Injectable } from '@nestjs/common';
import { LangQueryDto } from 'src/app.dto';
import { ShopCategoryEntity } from 'src/models/admin/shop-categories/entities/shop-category.entity';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ShopService {
  constructor(private readonly prismaService: PrismaService) {}

  async getShopCategories(query: LangQueryDto): Promise<ShopCategoryEntity[]> {
    const langTransform = new LangQueryDto(query.lang);
    let shop_categories = await this.prismaService.shopCategories.findMany({
      skip: 1,
      where: { parentId: '0' },
      include: {
        shopCategory: {
          include: { shopCategory: { include: { shopCategory: true } } },
        },
      },
    });
    shop_categories = langTransform.toName(shop_categories);

    return shop_categories;
  }
}
