import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
  Query,
  UseInterceptors,
  UploadedFile,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
} from '@nestjs/common';
var path = require('path');
import { FederationsService } from './federations.service';
import { CreateFederationDto } from './dto/create-federation.dto';
import { UpdateFederationDto } from './dto/update-federation.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Role } from '@prisma/client';
import { Roles } from 'src/decorator/roles.decorator';
import { FindAllFederationsDto } from './dto/find-federation.dto';
import { ENDPOINT_FEDERATIONS } from 'src/tools/endpoints';

@ApiBearerAuth()
@Roles(Role.Admin)
@Controller(ENDPOINT_FEDERATIONS)
@ApiTags('Federations')
export class FederationsController {
  constructor(private readonly federationsService: FederationsService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: process.env.PM2_PATH + 'upload/icons',
        filename(req, file, callback) {
          callback(null, `${Date.now()}${path.extname(file.originalname)}`);
        },
      }),
    }),
  )
  @UseInterceptors(ResponseInterceptor)
  create(
    @Body() data: CreateFederationDto,
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

    return this.federationsService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllFederationsDto) {
    const { include, orderBy, skip, take, where } = query;
    return this.federationsService.findAll({
      skip: skip && +skip,
      take: take && +take,
      where,
      orderBy,
      include,
    });
  }

  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.federationsService.findOne(id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: process.env.PM2_PATH + 'upload/icons',
        filename(req, file, callback) {
          callback(null, `${Date.now()}${path.extname(file.originalname)}`);
        },
      }),
    }),
  )
  @UseInterceptors(ResponseInterceptor)
  update(
    @Param('id') id: string,
    @Body() data: UpdateFederationDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpg|jpeg|jfif|webp)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 25 }),
        ],
        fileIsRequired: false,
      }),
    )
    file?: Express.Multer.File,
  ) {
    data.imagePath = file && file.path.slice(process.env.PM2_PATH.length + 5);

    return this.federationsService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.federationsService.remove(id);
  }
}
