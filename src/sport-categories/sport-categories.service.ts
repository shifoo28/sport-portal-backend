import { Injectable } from '@nestjs/common';
import { CreateSportCategoryDto } from './dto/create-sport-category.dto';
import { UpdateSportCategoryDto } from './dto/update-sport-category.dto';

@Injectable()
export class SportCategoriesService {
  create(createSportCategoryDto: CreateSportCategoryDto) {
    return 'This action adds a new sportCategory';
  }

  findAll() {
    return `This action returns all sportCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sportCategory`;
  }

  update(id: number, updateSportCategoryDto: UpdateSportCategoryDto) {
    return `This action updates a #${id} sportCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} sportCategory`;
  }
}
