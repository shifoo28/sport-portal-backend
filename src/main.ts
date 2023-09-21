import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error'],
  });

  // MiddleWares
  app.enableCors();
  app.use(
    helmet({
      crossOriginOpenerPolicy: { policy: 'unsafe-none' },
      crossOriginEmbedderPolicy: { policy: 'credentialless' },
      crossOriginResourcePolicy: { policy: 'cross-origin' },
      contentSecurityPolicy: {
        directives: {
          imgSrc: [`'self'`, 'data:'],
          scriptSrc: [
            `'self'`,
            `https: 'unsafe-inline'`,
            `http: 'unsafe-inline'`,
          ],
          manifestSrc: [`'self'`],
          frameSrc: [`'self'`],
        },
      },
    }),
  );
  // app.use(csurf());

  // OpenAPI
  const config = new DocumentBuilder()
    .setTitle('SportPortal API')
    .setDescription('API Documentation of SportPortal Backend!')
    .setVersion('0.0.1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Listening
  await app.listen(process.env.APP_PORT);
  console.log(`App Listening on port ${await app.getUrl()}`);
}
bootstrap();
