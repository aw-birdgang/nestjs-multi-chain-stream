import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {ClientModule} from './api/client/client.module';
import {LoggerMiddleware} from "./middleware/logger.middleware";
import {StreamModule} from './stream/stream.module';
import { AccountModule } from './api/account/account.module';
import { DepositModule } from './api/deposit/deposit.module';

@Module({
  imports: [
    ClientModule,
    StreamModule,
    AccountModule,
    DepositModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
