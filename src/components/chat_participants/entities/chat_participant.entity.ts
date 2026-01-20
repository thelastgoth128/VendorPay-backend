import { Chat } from "src/components/chats/entities/chat.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Chat_participant")
export class ChatParticipant {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Chat, chat => chat.participants)
    @JoinColumn({ name: "chat_id" })
    chat_id: string;

    @Column()//(FK -> user.id)
    user_id: string;

    @Column({ type: "timestamp",
        default: () => 'CURRENT_TIMESTAMP'
     })
    joined_at: Date;
}
