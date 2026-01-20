import { Chat } from "src/components/chats/entities/chat.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Message")
export class Message {
    @PrimaryGeneratedColumn()
    id: string;

    @ManyToOne(() => Chat, chat => chat.messages)
    @JoinColumn({ name: "chat_id" })
    chat_id: string;

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
