import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponeService {
  async send(
    code: number,
    error: Error,
    data: {}[] | {},
  ): Promise<{
    statusCode: number;
    message: string;
    data: {}[] | {};
  }> {
    return {
      statusCode: code,
      message: error ? error.message : null,
      data,
    };
  }
}
