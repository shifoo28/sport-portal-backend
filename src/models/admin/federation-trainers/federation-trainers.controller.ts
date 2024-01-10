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
  UseInterceptors,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
} from '@nestjs/common';
var path = require('path');
import { FederationTrainersService } from './federation-trainers.service';
import {
  CreateFederationTrainerDto,
  FindAllFederationTrainersDto,
} from './dto/create-federation-trainer.dto';
import { UpdateFederationTrainerDto } from './dto/update-federation-trainer.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { strToArray } from 'src/tools/strToArray';
import { strToObj } from 'src/tools/strToObj';
import { Role } from '@prisma/client';
import { Roles } from 'src/decorator/roles.decorator';

@ApiBearerAuth()
@Roles(Role.Admin, Role.Employee)
@Controller('federation-trainers')
@ApiTags('Federation Trainers')
export class FederationTrainersController {
  constructor(
    private readonly federationTrainersService: FederationTrainersService,
  ) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './upload/images/trainers',
        filename(req, file, callback) {
          callback(null, `${Date.now()}${path.extname(file.originalname)}`);
        },
      }),
    }),
  )
  @UseInterceptors(ResponseInterceptor)
  create(
    @Body() data: CreateFederationTrainerDto,
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
    data.imagePath = file.path.slice(7);
    data.workedAtTm = strToArray(data.workedAtTm, ',');
    data.workedAtRu = strToArray(data.workedAtRu, ',');
    data.badgesTm = strToArray(data.badgesTm, ',');
    data.badgesRu = strToArray(data.badgesRu, ',');

    return this.federationTrainersService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllFederationTrainersDto) {
    let { include, orderBy, skip, take, where } = query;

    return this.federationTrainersService.findAll({
      skip: skip && +skip,
      take: take && +take,
      include: include ? strToObj(include) : { federation: true },
      orderBy: orderBy ? strToObj(orderBy) : {},
      where: where ? strToObj(where) : {},
    });
  }

  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.federationTrainersService.findOne(id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './upload/images/trainers',
        filename(req, file, callback) {
          callback(null, `${Date.now()}${path.extname(file.originalname)}`);
        },
      }),
    }),
  )
  @UseInterceptors(ResponseInterceptor)
  update(
    @Param('id') id: string,
    @Body() data: UpdateFederationTrainerDto,
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
    file && (data.imagePath = file.path.slice(7));
    data.workedAtTm && (data.workedAtTm = strToArray(data.workedAtTm, ','));
    data.workedAtRu && (data.workedAtRu = strToArray(data.workedAtRu, ','));
    data.badgesTm && (data.badgesTm = strToArray(data.badgesTm, ','));
    data.badgesRu && (data.badgesRu = strToArray(data.badgesRu, ','));

    return this.federationTrainersService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.federationTrainersService.remove(id);
  }
}
