import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  var puerto = process.env.PORT || 3000;
  Logger.debug(`PORT : ${puerto}`);
  await app.listen(puerto);
}
bootstrap();
