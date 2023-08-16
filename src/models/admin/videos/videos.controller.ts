import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  FileTypeValidator,
  MaxFileSizeValidator,
  Query,
} from '@nestjs/common';
import { VideosService } from './videos.service';
import { CreateManyVideosDto, CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import FindAllVideosDto from './dto/videos.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('videos')
@ApiTags('Videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  // @UseInterceptors(FileInterceptor('photo', { dest: './upload/images' }))
  @UseInterceptors(FileInterceptor('video'))
  create(
    @Body() data: CreateVideoDto,
    // @UploadedFile(
    //   'photo',
    //   new ParseFilePipe({
    //     validators: [
    //       new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
    //       new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 25 }),
    //     ],
    //   }),
    // )
    // photo: Express.Multer.File,
    @UploadedFile(
      'video',
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(mp4)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 250 }),
        ],
      }),
    )
    video: Express.Multer.File,
  ) {
    console.log(video);
    console.log(data);
    data.videoPath = '';

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
