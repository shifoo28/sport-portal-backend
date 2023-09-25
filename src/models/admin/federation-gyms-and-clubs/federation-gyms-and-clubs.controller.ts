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
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';

@Controller('federation-gyms-and-clubs')
@ApiTags('Federation Gyms & Clubs')
export class FederationGymsAndClubsController {
  constructor(
    private readonly federationGymsAndClubsService: FederationGymsAndClubsService,
  ) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FilesInterceptor('photo', 5, {
      storage: diskStorage({
        destination: './upload/images/gac',
        filename(req, file, callback) {
          callback(null, `${Date.now()}_${file.originalname}`);
        },
      }),
    }),
  )
  @UseInterceptors(ResponseInterceptor)
  create(
    @Body() data: CreateFederationGymsAndClubDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    console.log(files);

    data.imagePath1 = files[0].path.slice(7);
    data.imagePath2 = files[1].path.slice(7);
    data.imagePath3 = files[2].path.slice(7);
    data.imagePath4 = files[3].path.slice(7);
    data.imagePath5 = files[4].path.slice(7);

    return this.federationGymsAndClubsService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllFederationGymsAndClubs) {
    const { skip, take, where, select, orderBy } = query;

    return this.federationGymsAndClubsService.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      where,
      select,
      orderBy,
    });
  }

  @Get(':id')
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
