import {Injectable, Logger} from '@nestjs/common';
import {ConfigService} from "../../config";
import {CreateDepositRequestDto} from "./dto/create-deposit-request.dto";
import {DepositResponseDto} from "./dto/deposit-response.dto";

@Injectable()
export class DepositService {
    constructor(
        private readonly configService: ConfigService,
    ) {}

    private readonly logger = new Logger(DepositService.name);

    async createDeposit(
        requestDto: CreateDepositRequestDto,
    ): Promise<DepositResponseDto> {
        const userId = requestDto.userId;
        this.logger.log('createDeposit > userId :: ' + userId,);
        return null;
    }
}
