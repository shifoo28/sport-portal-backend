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
        birthPlace:
          this.lang === ELangs.Tm ? record?.birthPlaceTm : record?.birthPlaceRu,
        sportLevel:
          this.lang === ELangs.Tm ? record?.sportLevelTm : record?.sportLevelRu,
        workedAt:
          this.lang === ELangs.Tm ? record?.workedAtTm : record?.workedAtRu,
        sports: this.lang === ELangs.Tm ? record?.sportsTm : record?.sportsRu,
        openAt: this.lang === ELangs.Tm ? record?.openAtTm : record?.openAtRu,
        job: this.lang === ELangs.Tm ? record?.jobTm : record?.jobRu,
        made: this.lang === ELangs.Tm ? record?.madeTm : record?.madeRu,
        badges: this.lang === ELangs.Tm ? record?.badgesTm : record?.badgesRu,
      };
    });
  }
}

export class SearchDto {
  @ApiProperty({ description: 'Search everywhere by the Name!' }) name: string;
  @ApiProperty({ enum: ELangs }) lang: ELangs;
}
