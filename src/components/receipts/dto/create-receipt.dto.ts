import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateReceiptDto {
    @IsNotEmpty()
    @IsString()
    url: string;

    @IsNotEmpty()
    @IsNumber()
    transactionId: number;
}
