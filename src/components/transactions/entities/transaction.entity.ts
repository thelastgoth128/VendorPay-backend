import { Chat } from "src/components/chats/entities/chat.entity";
import { Receipt } from "src/components/receipts/entities/receipt.entity";
import { User } from "src/components/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Transaction")
export class Transaction {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    amount: number;

    @Column({default: "MWK"})
    currency: string;

    @Column()
    status: string;

    @Column()
    payment_provider: string;

    @Column()
    reference_id: string;

    @Column({type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
     })
    created_at: Date

    @ManyToOne(() => Chat, chat => chat.transactions)
    @JoinColumn({ name: "chat_id" })
    chat_id: Chat;

    @ManyToOne(() => User, user => user.transactions)
    @JoinColumn({ name: "sender_id" })
    sender_id: User;

    @ManyToOne(() => User, user => user.received_transactions)
    @JoinColumn({ name: "receiver_id" })
    receiver_id: User;

    @OneToOne(() => Receipt, receipt => receipt.transaction)
    receipt: Receipt;

}
