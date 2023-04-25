import {Body, Controller, Logger, Post} from '@nestjs/common';
import {StreamService} from "./stream.service";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";

@ApiBearerAuth('JWT')
@Controller('v1/stream')
@ApiTags('STREAM API')
export class StreamController {
    constructor(private readonly streamService: StreamService) {}

    private readonly logger = new Logger(StreamController.name);

    @Post("/hook")
    async receiveTransaction(@Body() body: any) {
        try {
            this.logger.log(body);
            return ""
        } catch (e) {
            return e.toString()
        }
    }

}
