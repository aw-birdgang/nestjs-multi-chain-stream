import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {ClientModule} from './api/client/client.module';
import {LoggerMiddleware} from "./middleware/logger.middleware";
import { StreamController } from './stream/stream.controller';
import { StreamService } from './stream/stream.service';
import { StreamModule } from './stream/stream.module';

@Module({
  imports: [
    ClientModule,
    StreamModule
  ],
  controllers: [StreamController],
  providers: [StreamService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
