import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
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
    return next.handle().pipe(
      map((data) => {
        console.log(context.switchToHttp().getRequest().query.lang);
        isArray(data)
          ? data.map((i: any) => (i['name'] = i.nameTm))
          : (data['name'] = data.nameTm);

        return data;
      }),
    );
  }
}
