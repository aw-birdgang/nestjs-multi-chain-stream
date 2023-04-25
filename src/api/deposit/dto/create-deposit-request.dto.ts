import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDepositRequestDto {
  @IsNotEmpty({ message: '클라이언트 아이디(clientId)은 필수 값 입니다.' })
  @ApiProperty({ description: '클라이언트 아이디' })
  clientId: string;

  @IsNotEmpty({ message: '유저 아이디(userId)은 필수 값 입니다.' })
  @ApiProperty({ description: '유저 아이디' })
  userId: string;
}
