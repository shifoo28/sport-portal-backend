import { Module } from '@nestjs/common';
import { ShopCategoriesService } from './shop-categories.service';
import { ShopCategoriesController } from './shop-categories.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ShopCategoriesController],
  providers: [ShopCategoriesService, PrismaService],
})
export class ShopCategoriesModule {}
