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
  UploadedFiles,
  FileTypeValidator,
  HttpException,
} from '@nestjs/common';
var path = require('path');
import { FederationGymsAndClubsService } from './federation-gyms-and-clubs.service';
import {
  CreateFederationGymsAndClubDto,
  ITypeOfFiles,
} from './dto/create-federation-gyms-and-club.dto';
import { UpdateFederationGymsAndClubDto } from './dto/update-federation-gyms-and-club.dto';
import { ApiBearerAuth, ApiConsumes, ApiQuery, ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { strToArray } from 'src/tools/strToArray';
import { LangQueryDto } from 'src/app.dto';
import { Role } from '@prisma/client';
import { Roles } from 'src/decorator/roles.decorator';
import { FindAllFederationGymsAndClubs } from './dto/find-federation-gyms-and-clubs.dto';

@ApiBearerAuth()
@Roles(Role.Admin, Role.Employee)
@Controller('federation-gyms-and-clubs')
@ApiTags('Federation Gyms & Clubs')
export class FederationGymsAndClubsController {
  private readonly imageFields = {
    photo1: 'imagePath1',
    photo2: 'imagePath2',
    photo3: 'imagePath3',
    photo4: 'imagePath4',
    photo5: 'imagePath5',
  };
  constructor(
    private readonly federationGymsAndClubsService: FederationGymsAndClubsService,
  ) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'photo1', maxCount: 1 },
        { name: 'photo2', maxCount: 1 },
        { name: 'photo3', maxCount: 1 },
        { name: 'photo4', maxCount: 1 },
        { name: 'photo5', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: './upload/images/gac',
          filename(req, file, callback) {
            callback(null, `${Date.now()}${path.extname(file.originalname)}`);
          },
        }),
      },
    ),
  )
  @UseInterceptors(ResponseInterceptor)
  create(
    @Body() data: CreateFederationGymsAndClubDto,
    @UploadedFiles({
      transform: (value: ITypeOfFiles) => {
        // Create validator object
        const validator = new FileTypeValidator({
          fileType: '.(png|jpg|jpeg|jfif|webp)',
        });
        // Check files valid or not
        for (const key in value) {
          if (!validator.isValid(value[key][0]))
            throw new HttpException(
              validator.buildErrorMessage() + ' from ' + key,
              400,
            );
        }

        return value;
      },
    })
    files: ITypeOfFiles,
  ) {
    for (const key in files)
      data[this.imageFields[key]] = files[key][0].path.slice(7);
    data.tel = strToArray(data.tel, ',');
    data.sportsTm = strToArray(data.sportsTm, ',');
    data.sportsRu = strToArray(data.sportsRu, ',');
    data.openAtTm = strToArray(data.openAtTm, ',');
    data.openAtRu = strToArray(data.openAtRu, ',');

    return this.federationGymsAndClubsService.create(data);
  }

  @Get()
  @ApiQuery({ type: LangQueryDto })
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllFederationGymsAndClubs) {
    const { skip, take, where, include, orderBy } = query;

    return this.federationGymsAndClubsService.findAll({
      skip: skip && +skip,
      take: take && +take,
      where,
      include,
      orderBy,
    });
  }

  @Get(':id')
  @ApiQuery({ type: LangQueryDto })
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.federationGymsAndClubsService.findOne(id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'photo1', maxCount: 1 },
        { name: 'photo2', maxCount: 1 },
        { name: 'photo3', maxCount: 1 },
        { name: 'photo4', maxCount: 1 },
        { name: 'photo5', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: './upload/images/gac',
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
    @Body() data: UpdateFederationGymsAndClubDto,
    @UploadedFiles({
      transform: (value: ITypeOfFiles) => {
        // Create validator object
        const validator = new FileTypeValidator({
          fileType: '.(png|jpg|jpeg|jfif|webp)',
        });
        // Check files valid or not
        for (const key in value) {
          if (!validator.isValid(value[key][0]))
            throw new HttpException(
              validator.buildErrorMessage() + ' from ' + key,
              400,
            );
        }

        return value;
      },
    })
    files: ITypeOfFiles,
  ) {
    for (const key in files)
      data[this.imageFields[key]] = files[key][0].path.slice(7);
    data.tel && (data.tel = strToArray(data.tel, ','));
    data.sportsTm && (data.sportsTm = strToArray(data.sportsTm, ','));
    data.sportsRu && (data.sportsRu = strToArray(data.sportsRu, ','));
    data.openAtTm && (data.openAtTm = strToArray(data.openAtTm, ','));
    data.openAtRu && (data.openAtRu = strToArray(data.openAtRu, ','));

    return this.federationGymsAndClubsService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.federationGymsAndClubsService.remove(id);
  }
}
