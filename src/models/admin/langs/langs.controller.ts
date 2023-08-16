import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Lang, Prisma } from '@prisma/client';
import { CreateLangDto, GetLangsDto } from './dto/lang.dto';
import { LangService } from './lang.service';

@Controller('langs')
@ApiTags('Language')
export class LangsController {
  constructor(private readonly langService: LangService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.langService.lang(id);
  }

  @Get()
  findAll(@Query() query: GetLangsDto): Promise<Lang[]> {
    const { skip, take, where } = query;

    return this.langService.langs({
      skip: skip ? +skip : 0,
      take: take ? +take : 10,
      where,
    });
  }

  @Post()
  saveLang(@Body() data: CreateLangDto): Promise<Lang> {
    return this.langService.createLang(data);
  }

  @Patch(':id')
  updateLang(
    @Param('id') id: string,
    @Body() body: Prisma.LangUpdateInput,
  ): Promise<Lang> {
    return this.langService.updateLang(id, body);
  }

  @Delete(':id')
  removeLang(@Param('id') id: string): Promise<Lang> {
    return this.langService.deleteLang(id);
  }
}
