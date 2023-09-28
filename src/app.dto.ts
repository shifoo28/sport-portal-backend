import { ApiProperty } from '@nestjs/swagger';

export enum ELangs {
  Tm = 'Tm',
  Ru = 'Ru',
}

export class LangQueryDto {
  @ApiProperty({ enum: ELangs }) lang: ELangs;

  constructor(lang: ELangs) {
    this.lang = lang;
  }

  toName(records: any): any {
    return records.map((record) => {
      return {
        ...record,
        name: this.lang === ELangs.Tm ? record.nameTm : record.nameRu,
      };
    });
  }
}