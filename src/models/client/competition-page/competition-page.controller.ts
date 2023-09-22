import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { CompetitionPageService } from './competition-page.service';
import { ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { CompetitionEntity } from 'src/models/admin/competitions/entities/competition.entity';
import { ResponseInterceptor } from 'src/respone/response.interceptor';

@Controller('competition-page')
@ApiTags('Competition Page')
export class CompetitionPageController {
  constructor(
    private readonly competitionPageService: CompetitionPageService,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    schema: { $ref: getSchemaPath(CompetitionEntity) },
  })
  @ApiResponse({
    status: 404,
    schema: { $ref: 'Not Found!!!' },
  })
  @UseInterceptors(ResponseInterceptor)
  async findAllCompetitions() {
    const competitions =
      await this.competitionPageService.findAllCompetitions();

    return competitions;
  }
}
