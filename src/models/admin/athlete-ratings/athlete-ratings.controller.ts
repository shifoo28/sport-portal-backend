import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  Req,
  Query,
} from '@nestjs/common';
import { AthleteRatingsService } from './athlete-ratings.service';
import { CreateAthleteRatingDto } from './dto/create-athlete-rating.dto';
import { UpdateAthleteRatingDto } from './dto/update-athlete-rating.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from '@prisma/client';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { FindAllAthleteRatingsDto } from './dto/find-athlete-rating.dto';
import { ENDPOINT_ATHLETE_RATINGS } from 'src/tools/endpoints';

@ApiBearerAuth()
@Roles(Role.Admin)
@ApiTags('Athlete Ratings')
@Controller(ENDPOINT_ATHLETE_RATINGS)
export class AthleteRatingsController {
  constructor(private readonly athleteRatingsService: AthleteRatingsService) {}

  @Post()
  @UseInterceptors(ResponseInterceptor)
  create(@Req() req, @Body() data: CreateAthleteRatingDto) {
    data.userId = req.user.id;

    return this.athleteRatingsService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllAthleteRatingsDto) {
    const { skip, take, where, include, orderBy } = query;

    return this.athleteRatingsService.findAll({
      skip: skip & +skip,
      take: take & +take,
      where,
      include,
      orderBy,
    });
  }

  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.athleteRatingsService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(ResponseInterceptor)
  update(@Param('id') id: string, @Body() data: UpdateAthleteRatingDto) {
    return this.athleteRatingsService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.athleteRatingsService.remove(id);
  }
}
