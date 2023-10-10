import { Injectable } from '@nestjs/common';
import {
  CreateShopCategoryDto,
  FindAllShopCategoriesDto,
} from './dto/create-shop-category.dto';
import { UpdateShopCategoryDto } from './dto/update-shop-category.dto';
import { PrismaService } from 'src/prisma.service';
import { ShopCategoryEntity } from './entities/shop-category.entity';

@Injectable()
export class ShopCategoriesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateShopCategoryDto): Promise<ShopCategoryEntity> {
    const { nameRu, nameTm, parentId } = data;

    return this.prismaService.shopCategories.create({
      data: {
        nameTm,
        nameRu,
        parentCategory: parentId && { connect: { id: parentId } },
      },
    });
  }

  async findAll(
    query: FindAllShopCategoriesDto,
  ): Promise<ShopCategoryEntity[]> {
    return this.prismaService.shopCategories.findMany(query);
  }

  async findOne(id: string): Promise<ShopCategoryEntity> {
    return this.prismaService.shopCategories.findUnique({
      where: { id },
      include: {
        shopCategory: {
          include: { shopCategory: { include: { shopCategory: true } } },
        },
      },
    });
  }

  async update(
    id: string,
    data: UpdateShopCategoryDto,
  ): Promise<ShopCategoryEntity> {
    const { nameTm, nameRu, parentId } = data;

    return this.prismaService.shopCategories.update({
      where: { id },
      data: {
        nameTm,
        nameRu,
        parentCategory: parentId && { connect: { id: parentId } },
      },
    });
  }

  async remove(id: string): Promise<ShopCategoryEntity> {
    return this.prismaService.shopCategories.delete({ where: { id } });
  }
}
