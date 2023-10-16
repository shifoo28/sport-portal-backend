import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { PrismaService } from 'src/prisma.service';
import { ShopCategoriesService } from 'src/models/admin/shop-categories/shop-categories.service';

@Module({
  controllers: [ShopController],
  providers: [ShopService, PrismaService, ShopCategoriesService],
})
export class ShopModule {}
