import {HttpAdapterHost, NestFactory} from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {ConfigService} from "./config";
import {setupSwagger} from "./common/util/swagger";
import Moralis from "moralis";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const httpAdapter = app.get(HttpAdapterHost);

  // app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
      }),
  );

  app.enableCors();
  setupSwagger(app);
  process.env.NODE_ENV = configService.get('APP_ENV');
  const port = configService.get('APP_PORT');
  const apiKey = configService.get('MORALIS_API_KEY');
  await Moralis.start({
    apiKey: apiKey,
  })

  await app.listen(port);
  console.info(`Server listening on port ${port}`);
}
bootstrap();
