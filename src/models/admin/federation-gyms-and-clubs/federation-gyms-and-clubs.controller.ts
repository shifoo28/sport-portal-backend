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
} from '@nestjs/common';
import { FederationGymsAndClubsService } from './federation-gyms-and-clubs.service';
import {
  CreateFederationGymsAndClubDto,
  FindAllFederationGymsAndClubs,
} from './dto/create-federation-gyms-and-club.dto';
import { UpdateFederationGymsAndClubDto } from './dto/update-federation-gyms-and-club.dto';
import { ApiConsumes, ApiQuery, ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';
import { strToArray } from 'src/tools/strToArray';
import { LanguageTransformInterceptor } from 'src/interceptors/language.transform.interceptor';
import { LangQueryDto } from 'src/app.dto';

@Controller('federation-gyms-and-clubs')
@ApiTags('Federation Gyms & Clubs')
export class FederationGymsAndClubsController {
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
            callback(null, `${Date.now()}_${file.originalname}`);
          },
        }),
      },
    ),
  )
  @UseInterceptors(ResponseInterceptor)
  create(
    @Body() data: CreateFederationGymsAndClubDto,
    @UploadedFiles()
    files: {
      photo1: Express.Multer.File[];
      photo2: Express.Multer.File[];
      photo3: Express.Multer.File[];
      photo4: Express.Multer.File[];
      photo5: Express.Multer.File[];
    },
  ) {
    data.imagePath1 = files.photo1[0].path.slice(7);
    data.imagePath2 = files.photo2[0].path.slice(7);
    data.imagePath3 = files.photo3[0].path.slice(7);
    data.imagePath4 = files.photo4[0].path.slice(7);
    data.imagePath5 = files.photo5[0].path.slice(7);
    data.tel = strToArray(data.tel, ',');
    data.sportsTm = strToArray(data.sportsTm, ',');
    data.sportsRu = strToArray(data.sportsRu, ',');
    data.openAtTm = strToArray(data.openAtTm, ',');
    data.openAtRu = strToArray(data.openAtRu, ',');

    return this.federationGymsAndClubsService.create(data);
  }

  @Get()
  @ApiQuery({ type: LangQueryDto })
  @UseInterceptors(LanguageTransformInterceptor)
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllFederationGymsAndClubs) {
    const { skip, take, where, select, orderBy } = query;

    return this.federationGymsAndClubsService.findAll({
      skip: skip ? +skip : undefined,
      take: take ? +take : undefined,
      where,
      select,
      orderBy,
    });
  }

  @Get(':id')
  @ApiQuery({ type: LangQueryDto })
  @UseInterceptors(LanguageTransformInterceptor)
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.federationGymsAndClubsService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(ResponseInterceptor)
  update(
    @Param('id') id: string,
    @Body() data: UpdateFederationGymsAndClubDto,
  ) {
    return this.federationGymsAndClubsService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.federationGymsAndClubsService.remove(id);
  }
}
