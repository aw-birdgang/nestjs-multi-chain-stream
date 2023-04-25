import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {ApiProperty} from '@nestjs/swagger';

@Entity()
export class ClientStream {
    // @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ description: 'id' })
    id: string;

    // @Column({ length: 50 })
    @ApiProperty({ description: '이름' })
    chain: string;

    // @Column()
    @ApiProperty({ description: '설명' })
    description: string;

    // @Column()
    @ApiProperty({ description: '태그' })
    tag: string;

    // @Column()
    @ApiProperty({ description: '스트림 아이디' })
    streamId: string;

    // @CreateDateColumn({
    //     type: 'timestamp',
    //     default: () => 'CURRENT_TIMESTAMP(6)',
    // })
    createdAt: Date;

    // @UpdateDateColumn({
    //     type: 'timestamp',
    //     default: () => 'CURRENT_TIMESTAMP(6)',
    //     onUpdate: 'CURRENT_TIMESTAMP(6)',
    // })
    public updatedAt: Date;

    static of(params: Partial<ClientStream>): ClientStream {
        const clientStream = new ClientStream();
        Object.assign(clientStream, params);
        return clientStream;
    }

}
