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

  toName(records: any[]): any {
    return records.map((record) => {
      return {
        ...record,
        name: this.lang === ELangs.Tm ? record.nameTm : record.nameRu,
        location:
          this.lang === ELangs.Tm ? record?.locationTm : record?.locationRu,
        sports: this.lang === ELangs.Tm ? record?.sportsTm : record?.sportsRu,
        openAt: this.lang === ELangs.Tm ? record?.openAtTm : record?.openAtRu,
      };
    });
  }

  toNestedName(records: any): any {}
}

export class SearchDto {
  @ApiProperty({ description: 'Search everywhere by the Name!' }) name: string;
  @ApiProperty({ enum: ELangs }) lang: ELangs;
}
