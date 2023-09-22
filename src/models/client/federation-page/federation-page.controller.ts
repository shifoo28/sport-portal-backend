import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { FederationPageService } from './federation-page.service';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/respone/response.interceptor';

@Controller('federation-page')
@ApiTags('Federations Page')
export class FederationPageController {
  constructor(private readonly federationPageService: FederationPageService) {}

  @Get()
  @UseInterceptors(ResponseInterceptor)
  async findFederations() {
    const federations = await this.federationPageService.findFederations();

    return { federations };
  }

  @Get('sports')
  @UseInterceptors(ResponseInterceptor)
  async findAllFederationSports() {
    const fsports = await this.federationPageService.findAllFederationSports();

    return { fsports };
  }

  @Get('trainers')
  @UseInterceptors(ResponseInterceptor)
  async findAllFederationTrainers() {
    const ftrainers =
      await this.federationPageService.findAllFederationTrainers();

    return { ftrainers };
  }

  @Get('athletes')
  @UseInterceptors(ResponseInterceptor)
  async findAllFederationAthletes() {
    const fathletes =
      await this.federationPageService.findAllFederationAthletes();

    return { fathletes };
  }

  @Get('health_care')
  @UseInterceptors(ResponseInterceptor)
  async findAllDepartmentsAndEmployees() {
    const hcdepartments =
      await this.federationPageService.findAllDepartmentsAndEmployees();

    return { hcdepartments };
  }
}
