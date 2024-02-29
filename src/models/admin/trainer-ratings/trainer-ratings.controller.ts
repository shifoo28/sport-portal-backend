import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Req,
} from '@nestjs/common';
import { TrainerRatingsService } from './trainer-ratings.service';
import { CreateTrainerRatingDto } from './dto/create-trainer-rating.dto';
import { UpdateTrainerRatingDto } from './dto/update-trainer-rating.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from '@prisma/client';
import { FindAllTrainerRatingsDto } from './dto/find-trainer-ratings.dto';
import { ENDPOINT_TRAINER_RATINGS } from 'src/tools/endpoints';

@ApiBearerAuth()
@Roles(Role.Admin)
@ApiTags('Trainer Ratings')
@Controller(ENDPOINT_TRAINER_RATINGS)
export class TrainerRatingsController {
  constructor(private readonly trainerRatingsService: TrainerRatingsService) {}

  @Post()
  create(@Req() req, @Body() data: CreateTrainerRatingDto) {
    data.userId = req.user.id;

    return this.trainerRatingsService.create(data);
  }

  @Get()
  findAll(@Query() query: FindAllTrainerRatingsDto) {
    const { skip, take, where, include, orderBy } = query;

    return this.trainerRatingsService.findAll({
      skip: skip && +skip,
      take: take && +take,
      where,
      include,
      orderBy,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainerRatingsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateTrainerRatingDto) {
    return this.trainerRatingsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainerRatingsService.remove(id);
  }
}
