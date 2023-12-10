import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { HcdepartmentPageService } from './hcdepartment-page.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { LangQueryDto } from 'src/app.dto';
import { LanguageTransformInterceptor } from 'src/interceptors/language.transform.interceptor';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';
import { FindAllHealthCareDepartment } from 'src/models/admin/health-care-departments/dto/create-health-care-department.dto';
import { Public } from 'src/decorator/public-route.decorator';

@Public()
@Controller('hcdepartment-page')
@ApiTags('Health Care Page')
export class HcdepartmentPageController {
  constructor(
    private readonly hcdepartmentPageService: HcdepartmentPageService,
  ) {}

  @Get('health_care')
  @ApiQuery({ type: LangQueryDto })
  @UseInterceptors(LanguageTransformInterceptor)
  @UseInterceptors(ResponseInterceptor)
  async findAllDepartmentsAndEmployees(
    @Query() query: FindAllHealthCareDepartment,
  ) {
    return this.hcdepartmentPageService.findAllDepartmentsAndEmployees(query);
  }
}
