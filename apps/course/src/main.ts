import { NestFactory } from '@nestjs/core';
import { CourseModule } from './course.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(CourseModule);
  app.useLogger(new Logger('Course'));
  await app.listen(process.env.port ?? 3002);
}
bootstrap();
