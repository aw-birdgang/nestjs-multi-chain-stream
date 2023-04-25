import {Entity,} from 'typeorm';
import {ApiProperty} from '@nestjs/swagger';

@Entity()
export class Deposit {

  @ApiProperty({ description: 'id' })
  id: string;

  @ApiProperty({ description: '유저 아이디' })
  userId: string;

  @ApiProperty({ description: '토큰 타입' })
  tokenType: string = 'USDT';

  @ApiProperty({ description: '입금 완료 수량' })
  depositedAmount: string;

  @ApiProperty({ description: '체인 확인 상태' })
  state: number;

  @ApiProperty({ description: '입금 결과 상태' })
  resultState: number;

  @ApiProperty({ description: '지급 유무 상태' })
  paid: number;

  @ApiProperty({ description: '읽음 유무 상태' })
  read: number;

  @ApiProperty({ description: '입금 주소' })
  depositAddress: string;

  @ApiProperty({ description: '생성된 시간' })
  createdAt: Date;

  @ApiProperty({ description: '수정된 시간' })
  updatedAt: Date;

  @ApiProperty({ description: '입금된 시간' })
  depositedAt: Date;

  static of(params: Partial<Deposit>): Deposit {
    const deposit = new Deposit();
    Object.assign(deposit, params);
    return deposit;
  }

}
