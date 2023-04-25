import {Injectable, Logger} from '@nestjs/common';
import {EvmChain} from "@moralisweb3/common-evm-utils";
import {ConfigService} from "../../config";
import Moralis from "moralis";
import {ClientAddStreamRequestDto} from "./dto/client-addstream-request.dto";
import {ClientAddStreamResponseDto} from "./dto/client-addstream-response.dto";
import {ClientStream} from "./client-stream.entity";

@Injectable()
export class ClientService {
    constructor(
        private readonly configService: ConfigService,
    ) {}

    private readonly logger = new Logger(ClientService.name);

    async addStream(requestDto: ClientAddStreamRequestDto,): Promise<ClientAddStreamResponseDto> {
        try {
            const stream = {
                chains: [EvmChain.ETHEREUM, EvmChain.POLYGON, EvmChain.SEPOLIA], // list of blockchains to monitor
                description: requestDto.description, // your description
                tag: requestDto.tag, // give it a tag
                demo: false,
                webhookUrl: this.configService.get('MORALIS_STREAM_WEBHOOK_BASE_URL'),// webhook url to receive events,
                includeNativeTxs: true,
                includeAllTxLogs: true,
                includeInternalTxs: true,
                includeContractLogs: true,
            };

            const newStream = await Moralis.Streams.add(stream);
            const {id} = newStream.toJSON(); // { id
            this.logger.log(newStream.toJSON())
            console.log("Streams.add.id===>", id);
            const clientStream = new ClientStream();
            clientStream.streamId = id;
            clientStream.chain = requestDto.chain;
            clientStream.description = requestDto.description;
            clientStream.tag = requestDto.tag;
            const response = new ClientAddStreamResponseDto(clientStream);
            return response;
        } catch (error) {
            this.logger.log("sldkflskdflksdf===>", error.toString());
            //throw new HttpException('Error creating Provider', HttpStatus.BAD_REQUEST);
        }
    }
}
