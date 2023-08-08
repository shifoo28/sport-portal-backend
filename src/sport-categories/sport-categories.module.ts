import { Module } from '@nestjs/common';
import { SportCategoriesService } from './sport-categories.service';
import { SportCategoriesController } from './sport-categories.controller';

@Module({
  controllers: [SportCategoriesController],
  providers: [SportCategoriesService]
})
export class SportCategoriesModule {}
