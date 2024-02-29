// multer-dynamic-destination.middleware.ts

import { Injectable } from '@nestjs/common';
import {
  MulterOptionsFactory,
  MulterModuleOptions,
} from '@nestjs/platform-express';
import * as multer from 'multer';
const path = require('path');
import { ENDPOINT_VIDEOS } from 'src/tools/endpoints';

@Injectable()
export class MulterFileValidationMiddleware implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {
    return {
      storage: multer.diskStorage({
        destination: (req, file, cb) => {
          console.log('multer-validation==================================');
          console.log(file);

          let destinationFolder = './uploads/';

          // Customize the destination folder based on the route or other conditions
          switch (true) {
            case req.baseUrl.includes(ENDPOINT_VIDEOS):
              destinationFolder += 'videos/';
            default:
              destinationFolder += 'images/';
          }
          console.log('multer-validation==================================');
          console.log(destinationFolder);

          cb(null, destinationFolder);
        },
        filename: (req, file, cb) => {
          cb(null, `${Date.now()}${path.extname(file.originalname)}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        // Define your file type validation logic here
        const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (allowedMimeTypes.includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb(new Error('Unsupported file type'), false);
        }
      },
      limits: {},
    };
  }
}
