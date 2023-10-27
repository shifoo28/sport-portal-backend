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
} from '@nestjs/common';
import { FederationAthleteService } from './federation-athlete.service';
import {
  CreateFederationAthleteDto,
  FindAllFederationAthleteDto,
} from './dto/create-federation-athlete.dto';
import { UpdateFederationAthleteDto } from './dto/update-federation-athlete.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';
import { strToArray } from 'src/tools/strToArray';

@Controller('federation-athlete')
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
        destination: './upload/images/athletes',
        filename(req, file, callback) {
          callback(null, `${Date.now()}`);
        },
      }),
    }),
  )
  @UseInterceptors(ResponseInterceptor)
  create(
    @Body() data: CreateFederationAthleteDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    data.imagePath = file.path.slice(7);
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
      skip: skip ? +skip : undefined,
      take: take ? +take : undefined,
      select,
      where,
      orderBy,
      include: { federation: true },
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
        destination: './upload/images/athletes',
        filename(req, file, callback) {
          callback(null, `${Date.now()}`);
        },
      }),
    }),
  )
  @UseInterceptors(ResponseInterceptor)
  update(
    @Param('id') id: string,
    @Body() data: UpdateFederationAthleteDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    data.imagePath = file && file.path.slice(7);
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
