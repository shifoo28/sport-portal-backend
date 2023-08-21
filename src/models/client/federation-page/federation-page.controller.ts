import { Controller, Get } from '@nestjs/common';
import { FederationPageService } from './federation-page.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('federation-page')
@ApiTags('Federations Page')
export class FederationPageController {
  constructor(private readonly federationPageService: FederationPageService) {}

  @Get()
  async findFederations() {
    const federations = await this.federationPageService.findFederations();
    return { federations };
  }

  @Get('sports')
  async findAllFederationSports() {
    const fsports = await this.federationPageService.findAllFederationSports();
    return { fsports };
  }
}
