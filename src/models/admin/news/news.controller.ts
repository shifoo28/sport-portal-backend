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
var path = require('path');
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FindAllNewsDto } from './dto/news.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { Role } from '@prisma/client';
import { Roles } from 'src/decorator/roles.decorator';
import { ENDPOINT_NEWS } from 'src/tools/endpoints';

@ApiBearerAuth()
@Roles(Role.Admin, Role.Employee)
@Controller(ENDPOINT_NEWS)
@ApiTags('News')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: process.env.PM2_PATH + 'upload/images',
        filename(req, file, callback) {
          callback(null, `${Date.now()}${path.extname(file.originalname)}`);
        },
      }),
    }),
    ResponseInterceptor,
  )
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
    data.imagePath = file.path.slice(process.env.PM2_PATH.length + 5);

    return this.newsService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllNewsDto) {
    const { skip, take, orderBy, section } = query;

    return this.newsService.findAll({
      skip: skip && +skip,
      take: take && +take,
      where: { category: { section } },
      include: { category: true },
      orderBy,
    });
  }

  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: process.env.PM2_PATH + 'upload/images',
        filename(req, file, callback) {
          callback(null, `${Date.now()}${path.extname(file.originalname)}`);
        },
      }),
    }),
    ResponseInterceptor,
  )
  update(
    @Param('id') id: string,
    @Body() data: UpdateNewsDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpg|jpeg|jfif|webp)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 25 }),
        ],
        fileIsRequired: false,
      }),
    )
    file: Express.Multer.File,
  ) {
    data.imagePath = file && file.path.slice(process.env.PM2_PATH.length + 5);

    return this.newsService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.newsService.remove(id);
  }
}
