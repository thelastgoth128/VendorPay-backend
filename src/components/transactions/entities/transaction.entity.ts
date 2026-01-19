import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Transaction")
export class Transaction {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    chat_id: string;

    @Column()
    sender_id: string;

    @Column()
    receiver_id: string;

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
    
}
