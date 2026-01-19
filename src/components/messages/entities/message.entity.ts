import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Message")
export class Message {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    chat_id: string; //(FK -> chat.id)

    @Column()
    sender_id: string; //(FK -> user.id)

    @Column()
    message_type: string; // to be an enum(text,transaction,receipt)

    @Column()
    content: string;

    @Column({ type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
     })
     created_at: Date;
}
