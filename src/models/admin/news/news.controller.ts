import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  Controller,
  UploadedFile,
  ParseFilePipe,
  UseInterceptors,
  FileTypeValidator,
  MaxFileSizeValidator,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateManyNewsDto, CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FindAllNewsDto } from './dto/news.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('news')
@ApiTags('News')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('photo', { dest: './upload/images' }))
  create(
    @Body() data: CreateNewsDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpg|jpeg|jfif|webp)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 25 }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    data.imagePath = file.path;

    return this.newsService.create(data);
  }

  @Post('many')
  careteMany(@Body() data: CreateManyNewsDto) {
    return this.newsService.createMany(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(id);
  }

  @Get()
  findAll(@Query() query: FindAllNewsDto) {
    const { skip, take, where } = query;

    return this.newsService.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      where,
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateNewsDto) {
    return this.newsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsService.remove(id);
  }
}
