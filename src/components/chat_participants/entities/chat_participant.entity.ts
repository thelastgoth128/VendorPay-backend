import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Chat_participant")
export class ChatParticipant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()//(FK -> chat.id)
    chat_id: string;

    @Column()//(FK -> user.id)
    user_id: string;

    @Column({ type: "timestamp",
        default: () => 'CURRENT_TIMESTAMP'
     })
    joined_at: Date;
}
