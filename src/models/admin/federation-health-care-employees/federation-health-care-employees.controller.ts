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
          callback(null, `${Date.now()}_${file.originalname}`);
        },
      }),
    }),
  )
  create(
    @Body() data: CreateFederationHealthCareEmployeeDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    data.imagePath = file.path.slice(7);

    return this.federationHealthCareEmployeesService.create(data);
  }

  @Get()
  findAll(@Query() query: FindAllFederationHealthCareEmployeesDto) {
    const { skip, take, select, include, orderBy, where } = query;
    return this.federationHealthCareEmployeesService.findAll({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      where,
      select,
      orderBy,
      include,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.federationHealthCareEmployeesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: UpdateFederationHealthCareEmployeeDto,
  ) {
    return this.federationHealthCareEmployeesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.federationHealthCareEmployeesService.remove(id);
  }
}