import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ClientAddStreamRequestDto {
  @IsNotEmpty({ message: '체인(chain)은 필수 값 입니다.' })
  @IsString({ message: '체인(chain)의 형식이 올 바르지 않습니다.' })
  @Length(1, 50)
  @ApiProperty({ description: '체인' })
  chain: string;

  @IsNotEmpty({ message: '설명(description)은 필수 값 입니다.' })
  @IsString({ message: '설명(description)의 형식이 올 바르지 않습니다.' })
  @Length(1, 50)
  @ApiProperty({ description: '설명' })
  description: string;

  @IsString({ message: '태그(tag)의 형식이 올 바르지 않습니다.' })
  @Length(1, 50)
  @ApiProperty({ description: '태그' })
  tag: string;
}
