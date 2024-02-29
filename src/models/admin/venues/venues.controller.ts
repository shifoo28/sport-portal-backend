import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { VenuesService } from './venues.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { FindAllVenuesDto } from './dto/find-venues.dto';
import { ENDPOINT_VENUES } from 'src/tools/endpoints';

@ApiBearerAuth()
@ApiTags('Venues')
@Controller(ENDPOINT_VENUES)
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @Post()
  @UseInterceptors(ResponseInterceptor)
  create(@Body() data: CreateVenueDto) {
    return this.venuesService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllVenuesDto) {
    const { skip, take, where, include, orderBy } = query;

    return this.venuesService.findAll({
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
    return this.venuesService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(ResponseInterceptor)
  update(@Param('id') id: string, @Body() data: UpdateVenueDto) {
    return this.venuesService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.venuesService.remove(id);
  }
}
