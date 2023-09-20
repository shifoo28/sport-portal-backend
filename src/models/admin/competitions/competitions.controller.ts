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
  ParseFilePipe,
  FileTypeValidator,
  MaxFileSizeValidator,
} from '@nestjs/common';
import { CompetitionsService } from './competitions.service';
import {
  CreateCompetitionDto,
  FindAllCompetitionsDto,
} from './dto/create-competition.dto';
import { UpdateCompetitionDto } from './dto/update-competition.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('competitions')
@ApiTags('Competitions')
export class CompetitionsController {
  constructor(private readonly competitionsService: CompetitionsService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './upload/images/competitions',
        filename(req, file, callback) {
          callback(null, `${Date.now()}_${file.originalname}`);
        },
      }),
    }),
  )
  create(
    @Body() data: CreateCompetitionDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpg|jpeg|jfif||webp)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 25 }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    data.typeId = +data.typeId;
    data.imagePath = file.path.slice(7);

    return this.competitionsService.create(data);
  }

  @Get()
  findAll(@Query() query: FindAllCompetitionsDto) {
    const { skip, take, where, select, include, orderBy } = query;

    return this.competitionsService.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      where,
      select,
      include,
      orderBy,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.competitionsService.findOne(id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './upload/images/competitions',
        filename(req, file, callback) {
          callback(null, `${Date.now()}_${file.originalname}`);
        },
      }),
    }),
  )
  update(
    @Param('id') id: string,
    @Body() data: UpdateCompetitionDto,
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
    data.typeId = +data.typeId;
    if (file.path) data.imagePath = file.path.slice(7);

    return this.competitionsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.competitionsService.remove(id);
  }
}