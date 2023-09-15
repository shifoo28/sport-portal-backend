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
} from '@nestjs/common';
import { FederationTrainersService } from './federation-trainers.service';
import {
  CreateFederationTrainerDto,
  FindAllFederationTrainersDto,
} from './dto/create-federation-trainer.dto';
import { UpdateFederationTrainerDto } from './dto/update-federation-trainer.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

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
          callback(null, `${Date.now()}_${file.originalname}`);
        },
      }),
    }),
  )
  create(
    @Body() data: CreateFederationTrainerDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    data.imagePath = file.path.slice(7);

    return this.federationTrainersService.create(data);
  }

  @Get()
  findAll(@Query() query: FindAllFederationTrainersDto) {
    const { include, orderBy, select, skip, take, where } = query;
    return this.federationTrainersService.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      include,
      orderBy,
      select,
      where,
    });
  }

  @Get(':id')
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
          callback(null, `${Date.now()}_${file.originalname}`);
        },
      }),
    }),
  )
  update(
    @Param('id') id: string,
    @Body() data: UpdateFederationTrainerDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log(data);
    file && (data.imagePath = file.path.slice(7));

    return this.federationTrainersService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.federationTrainersService.remove(id);
  }
}
