import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ description: 'id' })
  id: string;

  @Column({ length: 50 })
  @ApiProperty({ description: '이름' })
  password: string;

  @Column({ length: 50 })
  @ApiProperty({ description: '이름' })
  name: string;

  @Column()
  @ApiProperty({ description: '토큰' })
  accessToken: string;

  @Column({ length: 50 })
  @ApiProperty({ description: '형태' })
  type: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updatedAt: Date;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    try {
      this.password = await  bcrypt.hash(this.password, 10);
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  static of(params: Partial<Client>): Client {
    const client = new Client();
    Object.assign(client, params);
    return client;
  }

  update(name: string, type: string): void {
    this.name = name;
    this.type = type;
  }

  updateAccessToken(accessToken: string): void {
    this.accessToken = accessToken;
  }
}
