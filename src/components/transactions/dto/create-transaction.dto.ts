import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    @IsString()
    currency: string;

    @IsNotEmpty()
    @IsNumber()
    sender_id: number;

    @IsNotEmpty()
    @IsNumber()
    receiver_id: number;
}
