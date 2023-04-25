import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterStreamRequestDto {
  @IsNotEmpty({ message: '스트림 아이디(streamId)은 필수 값 입니다.' })
  @IsString({ message: '스트림 아이디(streamId)의 형식이 올 바르지 않습니다.' })
  @Length(1, 50)
  @ApiProperty({ description: '스트림 아이디' })
  streamId: string;

  @IsNotEmpty({ message: '주소(address)은 필수 값 입니다.' })
  @IsString({ message: '주소(address)의 형식이 올 바르지 않습니다.' })
  @Length(1, 50)
  @ApiProperty({ description: '주소' })
  address: string;
}
