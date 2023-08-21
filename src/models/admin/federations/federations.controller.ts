import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
  Query,
} from '@nestjs/common';
import { FederationsService } from './federations.service';
import {
  CreateFederationDto,
  FindAllFederationsDto,
} from './dto/create-federation.dto';
import { UpdateFederationDto } from './dto/update-federation.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('federations')
@ApiTags('Federations')
export class FederationsController {
  constructor(private readonly federationsService: FederationsService) {}

  @Post()
  create(@Body() data: CreateFederationDto) {
    return this.federationsService.create(data);
  }

  @Get()
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
  findOne(@Param('id') id: string) {
    return this.federationsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateFederationDto) {
    return this.federationsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.federationsService.remove(id);
  }
}
