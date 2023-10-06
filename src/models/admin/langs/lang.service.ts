import { Injectable } from '@nestjs/common';
import { Lang, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LangService {
  constructor(private readonly prisma: PrismaService) {}

  async lang(id: string): Promise<Lang> {
    return this.prisma.lang.findUnique({ where: { id } });
  }

  async langs(): Promise<Lang[]> {
    return this.prisma.lang.findMany({});
  }

  async createLang(data: Prisma.LangCreateInput): Promise<Lang> {
    return this.prisma.lang.create({ data });
  }

  async updateLang(id: string, data: Prisma.LangUpdateInput): Promise<Lang> {
    return this.prisma.lang.update({ where: { id }, data });
  }

  async deleteLang(id: string): Promise<Lang> {
    return this.prisma.lang.delete({ where: { id } });
  }
}
