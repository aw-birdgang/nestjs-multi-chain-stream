import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {ClientModule} from './api/client/client.module';
import {LoggerMiddleware} from "./middleware/logger.middleware";

@Module({
  imports: [ClientModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
