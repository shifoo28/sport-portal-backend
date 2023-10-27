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
  UploadedFile,
} from '@nestjs/common';
import { FederationHealthCareEmployeesService } from './federation-health-care-employees.service';
import {
  CreateFederationHealthCareEmployeeDto,
  FindAllFederationHealthCareEmployeesDto,
} from './dto/create-federation-health-care-employee.dto';
import { UpdateFederationHealthCareEmployeeDto } from './dto/update-federation-health-care-employee.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';

@Controller('federation-health-care-employees')
@ApiTags('Federation Health Care Employees')
export class FederationHealthCareEmployeesController {
  constructor(
    private readonly federationHealthCareEmployeesService: FederationHealthCareEmployeesService,
  ) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './upload/images/hc',
        filename(req, file, callback) {
          callback(null, `${Date.now()}`);
        },
      }),
    }),
  )
  @UseInterceptors(ResponseInterceptor)
  create(
    @Body() data: CreateFederationHealthCareEmployeeDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    data.imagePath = file.path.slice(7);

    return this.federationHealthCareEmployeesService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllFederationHealthCareEmployeesDto) {
    const { skip, take, select, orderBy, where } = query;
    return this.federationHealthCareEmployeesService.findAll({
      skip: skip ? +skip : undefined,
      take: take ? +take : undefined,
      where,
      select,
      orderBy,
      include: { department: true },
    });
  }

  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.federationHealthCareEmployeesService.findOne(id);
  }

  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './upload/images/hc',
        filename(req, file, callback) {
          callback(null, `${Date.now()}`);
        },
      }),
    }),
  )
  @UseInterceptors(ResponseInterceptor)
  update(
    @Param('id') id: string,
    @Body() data: UpdateFederationHealthCareEmployeeDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    data.imagePath = file && file.path.slice(7);

    return this.federationHealthCareEmployeesService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.federationHealthCareEmployeesService.remove(id);
  }
}
