import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFile,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
} from '@nestjs/common';
var path = require('path');
import { FederationAthleteService } from './federation-athlete.service';
import {
  CreateFederationAthleteDto,
  FindAllFederationAthleteDto,
} from './dto/create-federation-athlete.dto';
import { UpdateFederationAthleteDto } from './dto/update-federation-athlete.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { strToArray } from 'src/tools/strToArray';
import { Role } from '@prisma/client';
import { Roles } from 'src/decorator/roles.decorator';
import { ENDPOINT_FEDERATION_ATHLETE } from 'src/tools/endpoints';

@ApiBearerAuth()
@Roles(Role.Admin, Role.Employee)
@Controller(ENDPOINT_FEDERATION_ATHLETE)
@ApiTags('Federation Athlete')
export class FederationAthleteController {
  constructor(
    private readonly federationAthleteService: FederationAthleteService,
  ) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: process.env.PM2_PATH + 'upload/images/athletes',
        filename(req, file, callback) {
          callback(null, `${Date.now()}${path.extname(file.originalname)}`);
        },
      }),
    }),
  )
  @UseInterceptors(ResponseInterceptor)
  create(
    @Body() data: CreateFederationAthleteDto,
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
    data.workedAtTm = strToArray(data.workedAtTm, ',');
    data.workedAtRu = strToArray(data.workedAtRu, ',');
    data.badgesTm = strToArray(data.badgesTm, ',');
    data.badgesRu = strToArray(data.badgesRu, ',');

    return this.federationAthleteService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllFederationAthleteDto) {
    const { skip, select, take, where, orderBy, include } = query;
    return this.federationAthleteService.findAll({
      skip: skip && +skip,
      take: take && +take,
      select,
      where,
      orderBy,
      include: { federation: true, athleteRatings: true },
    });
  }

  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.federationAthleteService.findOne(id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: process.env.PM2_PATH + 'upload/images/athletes',
        filename(req, file, callback) {
          callback(null, `${Date.now()}${path.extname(file.originalname)}`);
        },
      }),
    }),
  )
  @UseInterceptors(ResponseInterceptor)
  update(
    @Param('id') id: string,
    @Body() data: UpdateFederationAthleteDto,
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
    data.workedAtTm && (data.workedAtTm = strToArray(data.workedAtTm, ','));
    data.workedAtRu && (data.workedAtRu = strToArray(data.workedAtRu, ','));
    data.badgesTm && (data.badgesTm = strToArray(data.badgesTm, ','));
    data.badgesRu && (data.badgesRu = strToArray(data.badgesRu, ','));

    return this.federationAthleteService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.federationAthleteService.remove(id);
  }
}
