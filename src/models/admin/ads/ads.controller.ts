import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { AdsService } from './ads.service';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { Role } from '@prisma/client';
import { Roles } from 'src/decorator/roles.decorator';
import { ENDPOINT_ADS } from 'src/tools/endpoints';

@ApiBearerAuth()
@Roles(Role.Admin)
@Controller(ENDPOINT_ADS)
@ApiTags('Advertisement')
export class AdsController {
  constructor(private readonly adsService: AdsService) {}

  @Post()
  @UseInterceptors(ResponseInterceptor)
  create(@Body() createAdDto: CreateAdDto) {
    return this.adsService.create(createAdDto);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll() {
    return this.adsService.findAll();
  }

  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.adsService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(ResponseInterceptor)
  update(@Param('id') id: string, @Body() updateAdDto: UpdateAdDto) {
    return this.adsService.update(+id, updateAdDto);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.adsService.remove(+id);
  }
}
