import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ['error'],
  });

  const config = new DocumentBuilder()
    .setTitle('SportPortal API')
    .setDescription('API Documentation of SportPortal Backend!')
    .setVersion('0.0.1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.APP_PORT);
  console.log(`App Listening on port ${await app.getUrl()}`);
}
bootstrap();
