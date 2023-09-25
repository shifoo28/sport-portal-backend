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
        isArray(data)
          ? data.map((i: any) => {
              i['name'] = lang === ELangs.Tm ? i.nameTm : i.nameRu;
              return i;
            })
          : (data['name'] = lang === ELangs.Tm ? data.nameTm : data.nameRu);

        return data;
      }),
    );
  }
}
