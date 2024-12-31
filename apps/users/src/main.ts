import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  app.useLogger(new Logger('Users'));
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
