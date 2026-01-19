import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Receipt")
export class Receipt {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    transaction_id: string;

    @Column({unique: true})
    receipt_number: string;

    @Column({type: "timestamp"})
    issued_at: Date;

    @Column()
    metadata: string;
}
