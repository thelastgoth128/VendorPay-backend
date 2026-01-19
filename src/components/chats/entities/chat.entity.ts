import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Chat {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()// to be an enum(direct,group)
    chat_type: string;

    @Column() //(FK -> user.id)
    created_by: string;

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
    })
    created_at: Date
}
