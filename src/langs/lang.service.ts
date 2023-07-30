import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Lang, Prisma } from '@prisma/client';
import { GetLangsDto } from './dto/lang.dto';

@Injectable()
export class LangService {
  constructor(private readonly prisma: PrismaService) {}

  async lang(id: number): Promise<Lang | null> {
    return this.prisma.lang.findUnique({ where: { id } });
  }

  async langs(params: GetLangsDto): Promise<Lang[]> {
    const { skip, take = 10, cursor, where, orderBy } = params;

    return this.prisma.lang.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createLang(data: Prisma.LangCreateInput): Promise<Lang> {
    return this.prisma.lang.create({ data });
  }

  async updateLang(id: number, data: Prisma.LangUpdateInput): Promise<Lang> {
    return this.prisma.lang.update({ where: { id }, data });
  }

  async deleteLang(id: number): Promise<Lang> {
    return this.prisma.lang.delete({ where: { id } });
  }
}
