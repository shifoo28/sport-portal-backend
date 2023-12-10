import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { FederationPageService } from './federation-page.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';
import { LanguageTransformInterceptor } from 'src/interceptors/language.transform.interceptor';
import { LangQueryDto } from 'src/app.dto';
import { FindAllFederationsDto } from 'src/models/admin/federations/dto/create-federation.dto';
import { Public } from 'src/decorator/public-route.decorator';

@Public()
@Controller('federation-page')
@ApiTags('Federations Page')
export class FederationPageController {
  constructor(private readonly federationPageService: FederationPageService) {}

  @Get('sports')
  @ApiQuery({ type: LangQueryDto })
  @UseInterceptors(LanguageTransformInterceptor)
  @UseInterceptors(ResponseInterceptor)
  async findAllFederationSports(@Query() query: FindAllFederationsDto) {
    return this.federationPageService.findAllFederationSports(query);
  }

  @Get('trainers')
  @ApiQuery({ type: LangQueryDto })
  @UseInterceptors(LanguageTransformInterceptor)
  @UseInterceptors(ResponseInterceptor)
  async findAllFederationTrainers(@Query() query: FindAllFederationsDto) {
    return this.federationPageService.findAllFederationTrainers(query);
  }

  @Get('athletes')
  @ApiQuery({ type: LangQueryDto })
  @UseInterceptors(LanguageTransformInterceptor)
  @UseInterceptors(ResponseInterceptor)
  async findAllFederationAthletes(@Query() query: FindAllFederationsDto) {
    return this.federationPageService.findAllFederationAthletes(query);
  }
}
