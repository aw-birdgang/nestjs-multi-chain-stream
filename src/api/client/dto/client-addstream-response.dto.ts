import {Exclude, Expose} from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {ClientStream} from "../client-stream.entity";

export class ClientAddStreamResponseDto {
  @Exclude() private readonly _id: string;
  @Exclude() private readonly _chain: string;
  @Exclude() private readonly _description: string;
  @Exclude() private readonly _tag: string;
  @Exclude() private readonly _streamId: string;

  constructor(clientStream: ClientStream) {
    this._id = clientStream.id;
    this._chain = clientStream.chain;
    this._description = clientStream.description;
    this._tag = clientStream.tag;
    this._streamId = clientStream.streamId;
  }

  @ApiProperty({ description: 'ID' })
  @Expose()
  get id(): string {
    return this._id;
  }
  @ApiProperty({ description: '체인' })
  @Expose()
  get chain(): string {
    return this._chain;
  }
  @ApiProperty({ description: '설명' })
  @Expose()
  get description(): string {
    return this._description;
  }
  @ApiProperty({ description: '태그' })
  @Expose()
  get tag(): string {
    return this._tag;
  }
  @ApiProperty({ description: '스트림 아이디' })
  @Expose()
  get streamId(): string {
    return this._streamId;
  }
}
