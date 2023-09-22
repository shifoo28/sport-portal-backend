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
} from '@nestjs/common';
import { FederationSportsService } from './federation-sports.service';
import {
  CreateFederationSportDto,
  FindAllFederationSportsDto,
} from './dto/create-federation-sport.dto';
import { UpdateFederationSportDto } from './dto/update-federation-sport.dto';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/respone/response.interceptor';

@Controller('federation-sports')
@ApiTags('Federation Sports')
export class FederationSportsController {
  constructor(
    private readonly federationSportsService: FederationSportsService,
  ) {}

  @Post()
  @UseInterceptors(ResponseInterceptor)
  create(@Body() data: CreateFederationSportDto) {
    return this.federationSportsService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllFederationSportsDto) {
    const { skip, take, where, orderBy, select, include } = query;
    return this.federationSportsService.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      where,
      orderBy,
      select,
      include,
    });
  }

  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.federationSportsService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(ResponseInterceptor)
  update(@Param('id') id: string, @Body() data: UpdateFederationSportDto) {
    return this.federationSportsService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.federationSportsService.remove(id);
  }
}
