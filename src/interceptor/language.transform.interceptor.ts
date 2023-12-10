import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { ELangs } from 'src/app.dto';

export interface Response<T> {
  data: T;
}

@Injectable()
export class LanguageTransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const { lang } = context.switchToHttp().getRequest().query;

    return next.handle().pipe(
      map((records) => {
        records.map((record: any) => {
          record['name'] = lang === ELangs.Tm ? record.nameTm : record.nameRu;
          record['text'] = lang === ELangs.Tm ? record?.textTm : record?.textRu;
          record['location'] =
            lang === ELangs.Tm ? record?.locationTm : record?.locationRu;

          for (let key in record) {
            if (Array.isArray(record[key]))
              record[key].map((value) => {
                value['job'] = lang === ELangs.Tm ? value?.jobTm : value?.jobRu;
                value['name'] =
                  lang === ELangs.Tm ? value.nameTm : value.nameRu;
                value['text'] =
                  lang === ELangs.Tm ? value?.textTm : value?.textRu;
                value['made'] =
                  lang === ELangs.Tm ? value?.madeTm : value?.madeRu;
                value['workedAt'] =
                  lang === ELangs.Tm ? value?.workedAtTm : value?.workedAtRu;
                value['workAt'] =
                  lang === ELangs.Tm ? value?.workAtTm : value?.workAtRu;
                value['badges'] =
                  lang === ELangs.Tm ? value?.badgesTm : value?.badgesRu;
                value['position'] =
                  lang === ELangs.Tm ? value?.positionTm : value?.positionRu;
                value['birthPlace'] =
                  lang === ELangs.Tm
                    ? value?.birthPlaceTm
                    : value?.birthPlaceRu;
                value['sportLevel'] =
                  lang === ELangs.Tm
                    ? value?.sportLevelTm
                    : value?.sportLevelRu;
                value['leader'] =
                  lang === ELangs.Tm ? value?.leaderTm : value?.leaderRu;
                value['location'] =
                  lang === ELangs.Tm ? value?.locationTm : value?.locationRu;
                value['president'] =
                  lang === ELangs.Tm ? value?.presidentTm : value?.presidentRu;

                return value;
              });
            if (
              typeof record[key] === 'object' &&
              !Array.isArray(record[key]) &&
              !(record[key] instanceof Date) &&
              record[key] != null
            ) {
              let value = record[key];
              value['job'] = lang === ELangs.Tm ? value?.jobTm : value?.jobRu;
              value['name'] = lang === ELangs.Tm ? value.nameTm : value.nameRu;
              value['text'] =
                lang === ELangs.Tm ? value?.textTm : value?.textRu;
              value['made'] =
                lang === ELangs.Tm ? value?.madeTm : value?.madeRu;
              value['workedAt'] =
                lang === ELangs.Tm ? value?.workedAtTm : value?.workedAtRu;
              value['badges'] =
                lang === ELangs.Tm ? value?.badgesTm : value?.badgesRu;
              value['position'] =
                lang === ELangs.Tm ? value?.positionTm : value?.positionRu;
              value['birthPlace'] =
                lang === ELangs.Tm ? value?.birthPlaceTm : value?.birthPlaceRu;
              value['sportLevel'] =
                lang === ELangs.Tm ? value?.sportLevelTm : value?.sportLevelRu;
              value['leader'] =
                lang === ELangs.Tm ? value?.leaderTm : value?.leaderRu;
              value['location'] =
                lang === ELangs.Tm ? value?.locationTm : value?.locationRu;
              value['president'] =
                lang === ELangs.Tm ? value?.presidentTm : value?.presidentRu;
              record[key] = value;
            }
          }

          return record;
        });

        return records;
      }),
    );
  }
}
