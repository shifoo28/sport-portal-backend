import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Query,
  ParseFilePipe,
  FileTypeValidator,
  MaxFileSizeValidator,
} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FindAllTeamsDto } from './dto/find-team.dto';
import { ENDPOINT_TEAMS } from 'src/tools/endpoints';
const path = require('path');

@ApiBearerAuth()
@ApiTags('Teams')
@Controller(ENDPOINT_TEAMS)
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: process.env.PM2_PATH + 'upload/icons/teams',
        filename(req, file, callback) {
          callback(null, `${Date.now()}${path.extname(file.originalname)}`);
        },
      }),
    }),
    ResponseInterceptor,
  )
  create(
    @Body() data: CreateTeamDto,
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

    return this.teamsService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllTeamsDto) {
    const { skip, take, where, include, orderBy } = query;

    return this.teamsService.findAll({
      skip: skip && +skip,
      take: take && +take,
      where,
      include,
      orderBy,
    });
  }

  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.teamsService.findOne(id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: process.env.PM2_PATH + 'upload/icons/teams',
        filename(req, file, callback) {
          callback(null, `${Date.now()}${path.extname(file.originalname)}`);
        },
      }),
    }),
    ResponseInterceptor,
  )
  update(
    @Param('id') id: string,
    @Body() data: UpdateTeamDto,
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

    return this.teamsService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.teamsService.remove(id);
  }
}
