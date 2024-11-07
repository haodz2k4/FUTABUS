import { BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";


export class AbstractEntity extends BaseEntity {

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        nullable: false
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        nullable: false
    })
    updatedAt: Date;
}