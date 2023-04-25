import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Deposit } from '../deposit.entity';

export class DepositResponseDto {
  @Exclude() private readonly _id: string;
  @Exclude() private readonly _userId: string;
  @Exclude() private readonly _depositedAmount: string;
  @Exclude() private readonly _tokenType: string;
  @Exclude() private readonly _depositAddress: string;
  @Exclude() private readonly _createdAt: Date;
  @Exclude() private readonly _updatedAt: Date;

  constructor(deposit: Deposit) {
    this._id = deposit.id;
    this._userId = deposit.userId;
    this._depositedAmount = deposit.depositedAmount;
    this._tokenType = deposit.tokenType;
    this._depositAddress = deposit.depositAddress;
    this._createdAt = deposit.createdAt;
    this._updatedAt = deposit.updatedAt;
  }

  @ApiProperty({ description: 'ID' })
  @Expose()
  get id(): string {
    return this._id;
  }
  @ApiProperty({ description: '유저 아이디' })
  @Expose()
  get userId(): string {
    return this._userId;
  }
  @ApiProperty({ description: '입금 완료 수량' })
  @Expose()
  get depositedAmount(): string {
    return this._depositedAmount;
  }
  @ApiProperty({ description: '토큰 타입' })
  @Expose()
  get tokenType(): string {
    return this._tokenType;
  }
  @ApiProperty({ description: '입금 주소' })
  @Expose()
  get depositAddress(): string {
    return this._depositAddress;
  }
  @ApiProperty({ description: '생성 날짜' })
  @Expose()
  get createdAt(): Date {
    return this._createdAt;
  }
  @ApiProperty({ description: '수정 날짜' })
  @Expose()
  get updatedAt(): Date {
    return this._updatedAt;
  }
}
