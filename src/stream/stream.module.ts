import {Module} from '@nestjs/common';
import {ConfigModule} from "../config";
import {StreamService} from "./stream.service";
import {StreamController} from "./stream.controller";

@Module({
    imports: [
        ConfigModule,
    ],
    controllers: [StreamController],
    exports: [StreamService],
    providers: [StreamService],
})
export class StreamModule {}
