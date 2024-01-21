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
} from '@nestjs/common';
import { FootballTeamsService } from './football-teams.service';
import { CreateFootballTeamDto } from './dto/create-football-team.dto';
import { UpdateFootballTeamDto } from './dto/update-football-team.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { diskStorage } from 'multer';
const path = require('path');
import { FindAllFootballTeamsDto } from './dto/find-footbal-teams.dto';

@ApiBearerAuth()
@ApiTags('Football Teams')
@Controller('football-teams')
export class FootballTeamsController {
  constructor(private readonly footballTeamsService: FootballTeamsService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './upload/icons/teams',
        filename(req, file, callback) {
          callback(null, `${Date.now()}${path.extname(file.originalname)}`);
        },
      }),
    }),
    ResponseInterceptor,
  )
  create(
    @Body() data: CreateFootballTeamDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    data.imagePath = file.path.slice(7);

    return this.footballTeamsService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllFootballTeamsDto) {
    const { skip, take, where, include, orderBy } = query;

    return this.footballTeamsService.findAll({
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
    return this.footballTeamsService.findOne(id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './upload/icons/teams',
        filename(req, file, callback) {
          callback(null, `${Date.now()}${path.extname(file.originalname)}`);
        },
      }),
    }),
    ResponseInterceptor,
  )
  update(
    @Param('id') id: string,
    @Body() data: UpdateFootballTeamDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    data.imagePath = file && file.path.slice(7);

    return this.footballTeamsService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.footballTeamsService.remove(id);
  }
}
