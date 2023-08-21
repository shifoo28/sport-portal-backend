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
import { VideosService } from './videos.service';
import { CreateManyVideosDto, CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import FindAllVideosDto from './dto/videos.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

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
          destination: './upload/videos',
          filename(req, file, callback) {
            callback(null, `${Date.now()}_${file.originalname}`);
          },
        }),
      },
    ),
  )
  create(
    @Body() data: CreateVideoDto,
    @UploadedFiles()
    files: { photo?: Express.Multer.File[]; video?: Express.Multer.File[] },
  ) {
    data.imagePath = files.photo[0].path.slice(7);
    data.videoPath = files.video[0].path.slice(7);

    return this.videosService.create(data);
  }

  @Post('many')
  createMany(@Body() data: CreateManyVideosDto[]) {
    return this.videosService.createMany(data);
  }

  @Get()
  findAll(@Query() query: FindAllVideosDto) {
    const { skip, take, where } = query;

    return this.videosService.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      where,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateVideoDto) {
    return this.videosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videosService.remove(id);
  }
}
