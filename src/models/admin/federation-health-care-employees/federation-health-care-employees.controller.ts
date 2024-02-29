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
  ParseFilePipe,
  FileTypeValidator,
  MaxFileSizeValidator,
} from '@nestjs/common';
var path = require('path');
import { FederationHealthCareEmployeesService } from './federation-health-care-employees.service';
import { CreateFederationHealthCareEmployeeDto } from './dto/create-federation-health-care-employee.dto';
import { UpdateFederationHealthCareEmployeeDto } from './dto/update-federation-health-care-employee.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { Role } from '@prisma/client';
import { Roles } from 'src/decorator/roles.decorator';
import { FindAllFederationHealthCareEmployeesDto } from './dto/find-federation-health-care.dto';
import { ENDPOINT_FEDERATION_HEALTH_CARE_EMPLOYEES } from 'src/tools/endpoints';

@ApiBearerAuth()
@Roles(Role.Admin, Role.Employee)
@Controller(ENDPOINT_FEDERATION_HEALTH_CARE_EMPLOYEES)
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
        destination: process.env.PM2_PATH + 'upload/images/hc',
        filename(req, file, callback) {
          callback(null, `${Date.now()}${path.extname(file.originalname)}`);
        },
      }),
    }),
  )
  @UseInterceptors(ResponseInterceptor)
  create(
    @Body() data: CreateFederationHealthCareEmployeeDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpg|jpeg|jfif|webp)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 25 }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    data.imagePath = file.path.slice(process.env.PM2_PATH.length + 5);

    return this.federationHealthCareEmployeesService.create(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: FindAllFederationHealthCareEmployeesDto) {
    const { skip, take, select, orderBy, where } = query;
    return this.federationHealthCareEmployeesService.findAll({
      skip: skip && +skip,
      take: take && +take,
      where,
      select,
      orderBy,
      include: { department: true, employeeRatings: true },
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
        destination: process.env.PM2_PATH + 'upload/images/hc',
        filename(req, file, callback) {
          callback(null, `${Date.now()}${path.extname(file.originalname)}`);
        },
      }),
    }),
  )
  @UseInterceptors(ResponseInterceptor)
  update(
    @Param('id') id: string,
    @Body() data: UpdateFederationHealthCareEmployeeDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpg|jpeg|jfif|webp)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 25 }),
        ],
        fileIsRequired: false,
      }),
    )
    file: Express.Multer.File,
  ) {
    data.imagePath = file && file.path.slice(process.env.PM2_PATH.length + 5);

    return this.federationHealthCareEmployeesService.update(id, data);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string) {
    return this.federationHealthCareEmployeesService.remove(id);
  }
}
