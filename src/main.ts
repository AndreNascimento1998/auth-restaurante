import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = app.get<ConfigService>(ConfigService)
  const port = config.get('NODE_PORT') || 4000

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(port);
  console.log(`Está rodando em: ${await app.getUrl()}`)
}
bootstrap();
