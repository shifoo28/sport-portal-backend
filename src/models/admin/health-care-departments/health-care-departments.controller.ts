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
import { HealthCareDepartmentsService } from './health-care-departments.service';
import {
  CreateHealthCareDepartmentDto,
  FindAllHealthCareDepartment,
} from './dto/create-health-care-department.dto';
import { UpdateHealthCareDepartmentDto } from './dto/update-health-care-department.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { Role } from '@prisma/client';
import { Roles } from 'src/decorator/roles.decorator';
import { ENDPOINT_HEALTH_CARE_DEPARTMENTS } from 'src/tools/endpoints';

@ApiBearerAuth()
@Roles(Role.Admin)
@Controller(ENDPOINT_HEALTH_CARE_DEPARTMENTS)
@ApiTags('Health Care Departments')
export class HealthCareDepartmentsController {
  constructor(
    private readonly healthCareDepartmentsService: HealthCareDepartmentsService,
  ) {}

  @Post()
  @UseInterceptors(ResponseInterceptor)
  create(@Body() data: CreateHealthCareDepartmentDto) {
    return this.healthCareDepartmentsService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllHealthCareDepartment) {
    const { skip, take, where, orderBy, select, include } = query;

    return this.healthCareDepartmentsService.findAll({
      skip: skip && +skip,
      take: take && +take,
      where,
      select,
      include,
      orderBy,
    });
  }

  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.healthCareDepartmentsService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(ResponseInterceptor)
  update(@Param('id') id: string, @Body() data: UpdateHealthCareDepartmentDto) {
    return this.healthCareDepartmentsService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.healthCareDepartmentsService.remove(id);
  }
}
