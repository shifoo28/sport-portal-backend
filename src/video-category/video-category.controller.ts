import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VideoCategoryService } from './video-category.service';
import { CreateVideoCategoryDto } from './dto/create-video-category.dto';
import { UpdateVideoCategoryDto } from './dto/update-video-category.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindAllVideoCategory } from './dto/video-category.dto';

@Controller('video-category')
@ApiTags('Video Categories')
export class VideoCategoryController {
  constructor(private readonly videoCategoryService: VideoCategoryService) {}

  @Post()
  create(@Body() data: CreateVideoCategoryDto) {
    return this.videoCategoryService.create(data);
  }

  @Get()
  findAll(@Param() param: FindAllVideoCategory) {
    return this.videoCategoryService.findAll(param);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videoCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: UpdateVideoCategoryDto,
  ) {
    return this.videoCategoryService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videoCategoryService.remove(+id);
  }
}
