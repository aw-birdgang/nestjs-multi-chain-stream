import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config';
import { ClientController } from './client.controller';
import {ClientService} from "./client.service";

@Module({
    imports: [
        ConfigModule,
    ],
    controllers: [ClientController],
    exports: [ClientService],
    providers: [ClientService],
})
export class ClientModule {}
