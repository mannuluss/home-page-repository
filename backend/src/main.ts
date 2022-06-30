import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync(process.env.HTTPS_KEY || './secrets/private-key.pem'),
    cert: fs.readFileSync(process.env.HTTPS_CERT || './secrets/public-certificate.pem'),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions
  });
  app.enableCors();
  var puerto = process.env.PORT || 3000;
  Logger.debug(`PORT : ${puerto}`);
  await app.listen(puerto);
}
bootstrap();
