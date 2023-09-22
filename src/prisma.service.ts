import { Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, Prisma.LogLevel>
  implements OnModuleInit
{
  constructor() {
    super({
      log: [
        'error',
        {
          emit: 'event',
          level: 'query',
        },
      ],
      errorFormat: 'pretty',
    });
  }

  async onModuleInit() {
    this.$on('query', (event) => {
      // console.log(
      //   event.timestamp +
      //     '~' +
      //     event.query +
      //     '~' +
      //     event.params +
      //     '~' +
      //     event.duration +
      //     '~' +
      //     event.target,
      // ),
      console.log(event);
    });

    await this.$connect();
  }
}
