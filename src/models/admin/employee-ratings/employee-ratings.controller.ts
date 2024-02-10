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
  Req,
} from '@nestjs/common';
import { EmployeeRatingsService } from './employee-ratings.service';
import { CreateEmployeeRatingDto } from './dto/create-employee-rating.dto';
import { UpdateEmployeeRatingDto } from './dto/update-employee-rating.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { FindAllEmployeeRatingsDto } from './dto/find-employee-rating.dto';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from '@prisma/client';

@ApiBearerAuth()
@Roles(Role.Admin)
@ApiTags('Emplyee Ratings')
@Controller('employee-ratings')
export class EmployeeRatingsController {
  constructor(
    private readonly employeeRatingsService: EmployeeRatingsService,
  ) {}

  @Post()
  @UseInterceptors(ResponseInterceptor)
  create(@Req() req, @Body() data: CreateEmployeeRatingDto) {
    data.userId = req.user.id;

    return this.employeeRatingsService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllEmployeeRatingsDto) {
    const { skip, take, where, include, orderBy } = query;

    return this.employeeRatingsService.findAll({
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
    return this.employeeRatingsService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(ResponseInterceptor)
  update(@Param('id') id: string, @Body() data: UpdateEmployeeRatingDto) {
    return this.employeeRatingsService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.employeeRatingsService.remove(id);
  }
}
