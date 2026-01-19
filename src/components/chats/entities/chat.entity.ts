import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Chat {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    chat_type: string;

    @Column()
    created_by: string;

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
    })
    created_at: Date
}
