import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { HealthCareDepartmentsService } from './health-care-departments.service';
import {
  CreateHealthCareDepartmentDto,
  FindAllHealthCareDepartment,
} from './dto/create-health-care-department.dto';
import { UpdateHealthCareDepartmentDto } from './dto/update-health-care-department.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('health-care-departments')
@ApiTags('Health Care Departments')
export class HealthCareDepartmentsController {
  constructor(
    private readonly healthCareDepartmentsService: HealthCareDepartmentsService,
  ) {}

  @Post()
  create(@Body() data: CreateHealthCareDepartmentDto) {
    return this.healthCareDepartmentsService.create(data);
  }

  @Get()
  findAll(@Query() query: FindAllHealthCareDepartment) {
    const { skip, take, where, orderBy, select, include } = query;

    return this.healthCareDepartmentsService.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      where,
      select,
      include,
      orderBy,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthCareDepartmentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateHealthCareDepartmentDto) {
    return this.healthCareDepartmentsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthCareDepartmentsService.remove(id);
  }
}
