import { Chat } from "src/components/chats/entities/chat.entity";
import { User } from "src/components/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Message")
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Chat, chat => chat.messages)
    @JoinColumn({ name: "chat_id" })
    chat_id: Chat;

    @ManyToOne(() => User, user => user.messages)
    @JoinColumn({ name: "sender_id" })
    sender_id: User;

    @Column()
    message_type: string; // to be an enum(text,transaction,receipt)

    @Column()
    content: string;

    @Column({ type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
     })
     created_at: Date;
}
