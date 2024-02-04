import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Lang, Prisma, Role } from '@prisma/client';
import { CreateLangDto } from './dto/lang.dto';
import { LangService } from './lang.service';
import { ResponseInterceptor } from 'src/interceptor/response.interceptor';
import { Roles } from 'src/decorator/roles.decorator';

@ApiBearerAuth()
@Roles(Role.Admin)
@Controller('langs')
@ApiTags('Language')
export class LangsController {
  constructor(private readonly langService: LangService) {}

  @Post()
  @UseInterceptors(ResponseInterceptor)
  create(@Body() data: CreateLangDto): Promise<Lang> {
    return this.langService.createLang(data);
  }

  @Get()
  @UseInterceptors(ResponseInterceptor)
  findAll(): Promise<Lang[]> {
    return this.langService.langs();
  }

  @Get(':id')
  @UseInterceptors(ResponseInterceptor)
  findOne(@Param('id') id: string) {
    return this.langService.lang(id);
  }

  @Patch(':id')
  @UseInterceptors(ResponseInterceptor)
  update(
    @Param('id') id: string,
    @Body() body: Prisma.LangUpdateInput,
  ): Promise<Lang> {
    return this.langService.updateLang(id, body);
  }

  @Delete(':id')
  @UseInterceptors(ResponseInterceptor)
  remove(@Param('id') id: string): Promise<Lang> {
    return this.langService.deleteLang(id);
  }
}
