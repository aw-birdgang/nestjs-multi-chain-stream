import {Body, Controller, HttpStatus, Logger, Post, Res} from '@nestjs/common';
import {ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags} from '@nestjs/swagger';
import {ClientService} from "./client.service";
import {Response} from 'express';
import {ClientAddStreamRequestDto} from "./dto/client-addstream-request.dto";
import {instanceToPlain} from "class-transformer";
import {ClientAddStreamResponseDto} from "./dto/client-addstream-response.dto";

@ApiBearerAuth('JWT')
@Controller('v1/client')
@ApiTags('CLIENT API')
export class ClientController {
    constructor(private readonly clientService: ClientService) {}

    private readonly logger = new Logger(ClientController.name);

    @Post()
    @ApiOperation({
        summary: '스트림 생성 API',
        description: '스트림 생성 합니다.',
    })
    @ApiOkResponse({
        description: '스트림 생성 합니다.',
        type: ClientAddStreamResponseDto,
    })
    async createAddStream(
        @Body() requestDto: ClientAddStreamRequestDto,
        @Res() res: Response,
    ) {
        this.logger.log(
            'createAddStream > requestDto userId :: ' + requestDto.chain,
        );
        const deposit = await this.clientService.addStream(requestDto);
        return res.status(HttpStatus.OK).json(instanceToPlain(deposit));
    }

}
