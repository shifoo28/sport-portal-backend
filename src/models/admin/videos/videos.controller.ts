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
  FileTypeValidator,
  HttpException,
} from '@nestjs/common';
const path = require('path');
import { VideosService } from './videos.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import FindAllVideosDto, { ITypeOfFiles } from './dto/videos.dto';
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
  private readonly imageFileds = {
    photo: 'imagePath',
    video: 'videoPath',
  };
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
          destination: process.env.PM2_PATH + 'upload/video',
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
    @UploadedFiles({
      transform: (value) => {
        // Create validator object
        const validatorImage = new FileTypeValidator({
          fileType: '.(png|jpg|jpeg|jfif|webp)',
        });
        const validatorVideo = new FileTypeValidator({
          fileType: '.(mp4|ogg|mpeg|avi|webm)',
        });
        // Check files valid or not
        if (!validatorImage.isValid(value.photo[0]))
          throw new HttpException(
            validatorImage.buildErrorMessage() + ' from photo',
            400,
          );
        if (!validatorVideo.isValid(value.video[0]))
          throw new HttpException(
            validatorVideo.buildErrorMessage() + ' from video',
            400,
          );

        return value;
      },
    })
    files: ITypeOfFiles,
  ) {
    for (const key in files)
      data[this.imageFileds[key]] = files[key][0].path.slice(
        process.env.PM2_PATH.length + 5,
      );

    return this.videosService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllVideosDto) {
    const { skip, take, where, include, orderBy } = query;

    return this.videosService.findAll({
      skip: skip && +skip,
      take: take && +take,
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
          destination: process.env.PM2_PATH + 'upload/video',
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
    @UploadedFiles({
      transform: (value) => {
        // Create validator object
        const validatorImage = new FileTypeValidator({
          fileType: '.(png|jpg|jpeg|jfif|webp)',
        });
        const validatorVideo = new FileTypeValidator({
          fileType: '.(mp4|ogg|mpeg|avi|webm)',
        });
        // Check files valid or not
        if (value.photo && !validatorImage.isValid(value.photo[0]))
          throw new HttpException(
            validatorImage.buildErrorMessage() + ' from photo',
            400,
          );
        if (value.video && !validatorVideo.isValid(value.video[0]))
          throw new HttpException(
            validatorVideo.buildErrorMessage() + ' from video',
            400,
          );

        return value;
      },
    })
    files: ITypeOfFiles,
  ) {
    for (const key in files)
      data[this.imageFileds[key]] = files[key][0].path.slice(
        process.env.PM2_PATH.length + 5,
      );

    return this.videosService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.videosService.remove(id);
  }
}
