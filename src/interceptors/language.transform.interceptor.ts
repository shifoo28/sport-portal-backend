import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { ELangs } from 'src/app.dto';
import { isArray } from 'util';

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
      map((data) => {
        if (isArray(data)) {
          data.map((i: any) => {
            i['name'] = lang === ELangs.Tm ? i.nameTm : i.nameRu;
            i['text'] = lang === ELangs.Tm ? i?.textTm : i?.textRu;

            return i;
          });
        } else {
          data['name'] = lang === ELangs.Tm ? data.nameTm : data.nameRu;
          data['text'] = lang === ELangs.Tm ? data?.textTm : data?.textRu;
        }

        return data;
      }),
    );
  }
}
