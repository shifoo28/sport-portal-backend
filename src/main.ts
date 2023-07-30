import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['error'] });

  const config = new DocumentBuilder()
    .setTitle('SportPortal API')
    .setDescription('API Documentation of SportPortal Backend!')
    .setVersion('0.0.1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app
    .listen(process.env.APP_PORT)
    .then(() => console.log(`App Listening on port::: ${process.env.APP_PORT}`))
    .catch((error) => console.log(error));
}
bootstrap();
