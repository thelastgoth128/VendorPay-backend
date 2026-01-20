import { User } from "src/components/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("Chat")
export class Chat {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()// to be an enum(direct,group)
    chat_type: string;

    @ManyToOne(() => User, user => user.chats)
    @JoinColumn({ name: "created_by" })
    created_by: User;

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
    })
    created_at: Date
}
