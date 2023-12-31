import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
var path = require('path');
import { VideosService } from './videos.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import FindAllVideosDto from './dto/videos.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { Role } from '@prisma/client';
import { Roles } from 'src/decorator/roles.decorator';

@ApiBearerAuth()
@Roles(Role.Admin, Role.Employee)
@Controller('videos')
@ApiTags('Videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'photo', maxCount: 1 },
        { name: 'video', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: './upload/video',
          filename(req, file, callback) {
            callback(null, `${Date.now()}${path.extname(file.originalname)}`);
          },
        }),
      },
    ),
  )
  @UseInterceptors(ResponseInterceptor)
  create(
    @Body() data: CreateVideoDto,
    @UploadedFiles()
    files: { photo: Express.Multer.File[]; video: Express.Multer.File[] },
  ) {
    data.imagePath = files.photo[0].path.slice(7);
    data.videoPath = files.video[0].path.slice(7);

    return this.videosService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllVideosDto) {
    const { skip, take, where, include, orderBy } = query;

    return this.videosService.findAll({
      skip: skip ? +skip : undefined,
      take: take ? +take : undefined,
      where,
      include,
      orderBy,
    });
  }

  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.videosService.findOne(id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'photo', maxCount: 1 },
        { name: 'video', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: './upload/video',
          filename(req, file, callback) {
            callback(null, `${Date.now()}${path.extname(file.originalname)}`);
          },
        }),
      },
    ),
  )
  @UseInterceptors(ResponseInterceptor)
  update(
    @Param('id') id: string,
    @Body() data: UpdateVideoDto,
    @UploadedFiles()
    files: { photo: Express.Multer.File[]; video: Express.Multer.File[] },
  ) {
    data.imagePath && (data.imagePath = files.photo[0].path.slice(7));
    data.videoPath && (data.videoPath = files.video[0].path.slice(7));

    return this.videosService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.videosService.remove(id);
  }
}
