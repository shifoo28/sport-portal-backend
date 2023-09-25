import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { FederationPageService } from './federation-page.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';
import { LanguageTransformInterceptor } from 'src/interceptors/language.transform.interceptor';
import { LangQueryDto } from 'src/app.dto';

@Controller('federation-page')
@ApiTags('Federations Page')
export class FederationPageController {
  constructor(private readonly federationPageService: FederationPageService) {}

  @Get()
  @ApiQuery({ type: LangQueryDto })
  @UseInterceptors(LanguageTransformInterceptor)
  @UseInterceptors(ResponseInterceptor)
  async findFederations() {
    return this.federationPageService.findFederations();
  }

  @Get('sports')
  @ApiQuery({ type: LangQueryDto })
  @UseInterceptors(LanguageTransformInterceptor)
  @UseInterceptors(ResponseInterceptor)
  async findAllFederationSports() {
    return this.federationPageService.findAllFederationSports();
  }

  @Get('trainers')
  @ApiQuery({ type: LangQueryDto })
  @UseInterceptors(LanguageTransformInterceptor)
  @UseInterceptors(ResponseInterceptor)
  async findAllFederationTrainers() {
    return this.federationPageService.findAllFederationTrainers();
  }

  @Get('athletes')
  @ApiQuery({ type: LangQueryDto })
  @UseInterceptors(LanguageTransformInterceptor)
  @UseInterceptors(ResponseInterceptor)
  async findAllFederationAthletes() {
    return this.federationPageService.findAllFederationAthletes();
  }

  @Get('health_care')
  @ApiQuery({ type: LangQueryDto })
  @UseInterceptors(LanguageTransformInterceptor)
  @UseInterceptors(ResponseInterceptor)
  async findAllDepartmentsAndEmployees() {
    return this.federationPageService.findAllDepartmentsAndEmployees();
  }
}
