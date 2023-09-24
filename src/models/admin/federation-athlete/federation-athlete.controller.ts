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
import { ResponseInterceptor } from 'src/respone/response.interceptor';

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
          callback(null, `${Date.now()}_${file.originalname}`);
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

    return this.federationAthleteService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllFederationAthleteDto) {
    const { skip, select, take, where, orderBy, include } = query;
    return this.federationAthleteService.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
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
  @UseInterceptors(ResponseInterceptor)
  update(@Param('id') id: string, @Body() data: UpdateFederationAthleteDto) {
    return this.federationAthleteService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.federationAthleteService.remove(id);
  }
}
