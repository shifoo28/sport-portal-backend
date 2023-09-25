import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Lang, Prisma } from '@prisma/client';
import { CreateLangDto, GetLangsDto } from './dto/lang.dto';
import { LangService } from './lang.service';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';

@Controller('langs')
@ApiTags('Language')
export class LangsController {
  constructor(private readonly langService: LangService) {}

  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.langService.lang(id);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(@Query() query: GetLangsDto): Promise<Lang[]> {
    const { skip, take, where } = query;

    return this.langService.langs({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      where,
    });
  }

  @Post()
  @ApiBearerAuth()
  @UseInterceptors(ResponseInterceptor)
  saveLang(@Body() data: CreateLangDto): Promise<Lang> {
    return this.langService.createLang(data);
  }

  @Patch(':id')
  @UseInterceptors(ResponseInterceptor)
  updateLang(
    @Param('id') id: string,
    @Body() body: Prisma.LangUpdateInput,
  ): Promise<Lang> {
    return this.langService.updateLang(id, body);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  removeLang(@Param('id') id: string): Promise<Lang> {
    return this.langService.deleteLang(id);
  }
}
