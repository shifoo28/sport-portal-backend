import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { FederationsService } from './federations.service';
import {
  CreateFederationDto,
  FindAllFederationsDto,
} from './dto/create-federation.dto';
import { UpdateFederationDto } from './dto/update-federation.dto';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/respone/response.interceptor';

@Controller('federations')
@ApiTags('Federations')
export class FederationsController {
  constructor(private readonly federationsService: FederationsService) {}

  @Post()
  @UseInterceptors(ResponseInterceptor)
  create(@Body() data: CreateFederationDto) {
    return this.federationsService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllFederationsDto) {
    const { include, orderBy, skip, take, where } = query;
    return this.federationsService.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      where,
      orderBy,
      include,
    });
  }

  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.federationsService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(ResponseInterceptor)
  update(@Param('id') id: string, @Body() data: UpdateFederationDto) {
    return this.federationsService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.federationsService.remove(id);
  }
}
