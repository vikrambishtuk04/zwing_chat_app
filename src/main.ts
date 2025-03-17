import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/filters/GlobalExceptionFilter';
import * as dotenv from 'dotenv';
dotenv.config(); // Load .env variables

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GlobalExceptionFilter()); // Apply global exception handling
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
