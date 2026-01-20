import { Transaction } from "src/components/transactions/entities/transaction.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Receipt")
export class Receipt {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Transaction, transaction => transaction.receipt)
    @JoinColumn({ name: "transaction_id" })
    transaction: Transaction;

    @Column({unique: true})
    receipt_number: string;

    @Column({type: "timestamp"})
    issued_at: Date;

    @Column()
    metadata: string;
}
