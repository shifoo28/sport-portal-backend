import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
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
  findAll(@Param() param: GetLangsDto): Promise<Lang[]> {
    return this.langService.langs(param);
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
