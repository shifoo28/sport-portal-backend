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
import { countries } from 'src/tools/constants';
import { Public } from 'src/decorator/public-route.decorator';

@Public()
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
    let sports = await this.gymsAndClubsPageService.getSportTypes(query.lang);

    const locations = countries.map((l) => {
      return query.lang === ELangs.Tm ? l.nameTm : l.nameRu;
    });

    return [
      { name: 'sports', filters: sports },
      { name: 'locations', filters: locations },
    ];
  }

  @Post('filter')
  @UseInterceptors(ResponseInterceptor)
  async filterGymsAndClubs(
    @Query() query: FilterOptionsDto,
  ): Promise<FederationGymsAndClubEntity[]> {
    return this.gymsAndClubsPageService.filterGymsAndClubs(query);
  }
}
