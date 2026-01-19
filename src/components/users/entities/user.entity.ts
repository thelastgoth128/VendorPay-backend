import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    phone_number: string;

    @Column()//role enum(vendor,customer,admin) later
    role: string;

    @Column ({
        type: 'timestamp', default:()=>'CURRENT_TIMESTAMP'
    })
    created_at : Date

    @Column({
        type: "timestamp",
    })
    updated_at: Date;
}
