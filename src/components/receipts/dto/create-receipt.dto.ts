import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateReceiptDto {
    // @IsNotEmpty()
    // @IsString()
    // url: string;

    @IsNotEmpty()
    @IsNumber()
    transaction_id: number;
}
