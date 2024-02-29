import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class FileTypeValidationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req: Request = context.switchToHttp().getRequest();
    const files = req.files; // Assuming you're using a middleware like Multer to handle file uploads

    // Validate file types
    const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];
    Array.isArray(files)
      ? files.find((file) => {
          console.log(file);
          if (!allowedFileTypes.includes(file.mimetype))
            throw new HttpException(
              'Unsupported file type',
              HttpStatus.BAD_REQUEST,
            );
        })
      : console.log('Not an array');

    return next.handle();
  }
}
