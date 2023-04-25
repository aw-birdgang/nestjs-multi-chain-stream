import {Body, Controller, HttpStatus, Logger, Post, Res} from '@nestjs/common';
import {StreamService} from "./stream.service";
import {ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {ClientAddStreamResponseDto} from "../api/client/dto/client-addstream-response.dto";
import {ClientAddStreamRequestDto} from "../api/client/dto/client-addstream-request.dto";
import {Response} from "express";
import {instanceToPlain} from "class-transformer";
import {RegisterStreamRequestDto} from "./dto/register-stream-request.dto";

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

    @Post("/register/:address")
    @ApiOperation({
        summary: '주소 등록 API',
        description: '주소 등록 생성 합니다.',
    })
    @ApiOkResponse({
        description: '주소 등록 생성 합니다.',
    })
    async registerAddress(
        @Body() requestDto: RegisterStreamRequestDto,
        @Res() res: Response,
    ) {
        this.logger.log(
            'registerAddress > requestDto address :: ' + requestDto.address,
        );
        const deposit = await this.streamService.registerAddress(requestDto);
        return res.status(HttpStatus.OK).json(instanceToPlain(deposit));
    }

}
