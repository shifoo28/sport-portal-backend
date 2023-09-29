import { Controller, Get, Post, Query, UseInterceptors } from '@nestjs/common';
import {
  GymsAndClubsPageService,
  IGymClubPage,
} from './gyms-and-clubs-page.service';
import { ELangs, LangQueryDto } from 'src/app.dto';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';
import { ApiTags } from '@nestjs/swagger';
import { FederationGymsAndClubEntity } from 'src/models/admin/federation-gyms-and-clubs/entities/federation-gyms-and-club.entity';
import { FilterOptionsDto } from './dto/filter-options.dto';
import { LanguageTransformInterceptor } from 'src/interceptors/language.transform.interceptor';
import { countries } from 'src/tools/constants';

@Controller('gyms-and-clubs-page')
@ApiTags('Gyms & Clubs Page')
export class GymsAndClubsPageController {
  constructor(
    private readonly gymsAndClubsPageService: GymsAndClubsPageService,
  ) {}

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: LangQueryDto): Promise<IGymClubPage> {
    return this.gymsAndClubsPageService.findAll(query);
  }

  @Get('filters')
  @UseInterceptors(ResponseInterceptor)
  async getFilterOptions(@Query() query: LangQueryDto) {
    const langTransform = new LangQueryDto(query.lang);

    let sportTypes = await this.gymsAndClubsPageService.getSportTypes();
    sportTypes = langTransform.toName(sportTypes);

    const locations = countries.map((l) => {
      return query.lang === ELangs.Tm ? l.nameTm : l.nameRu;
    });

    return { sportTypes, locations };
  }

  @Post('filter')
  @UseInterceptors(LanguageTransformInterceptor)
  @UseInterceptors(ResponseInterceptor)
  async filterGymsAndClubs(
    @Query() query: FilterOptionsDto,
  ): Promise<FederationGymsAndClubEntity[]> {
    return this.gymsAndClubsPageService.getGymsAndClubs(query);
  }
}
