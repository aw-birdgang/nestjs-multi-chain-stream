import { Injectable } from '@nestjs/common';
import Moralis from "moralis";
import {RegisterStreamRequestDto} from "./dto/register-stream-request.dto";

@Injectable()
export class StreamService {
    async registerAddress(registerStreamRequestDto: RegisterStreamRequestDto,) {
        const moralisResult = await Moralis.Streams.addAddress({address: registerStreamRequestDto.address, id: registerStreamRequestDto.streamId});
        return moralisResult;
    }
}
