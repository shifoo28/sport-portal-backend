import { ApiProperty } from '@nestjs/swagger';

enum Langs {
  Tm = 'Tm',
  Ru = 'Ru',
}

export class LangQueryDto {
  @ApiProperty({ enum: Langs }) lang: Langs;

  constructor(lang: Langs) {
    this.lang = lang;
  }

  toName(records: any): any {
    return records.map((record) => {
      return {
        ...record,
        name: this.lang === Langs.Tm ? record.nameTm : record.nameRu,
      };
    });
  }
}
