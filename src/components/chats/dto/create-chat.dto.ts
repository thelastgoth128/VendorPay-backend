import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateChatDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsNotEmpty()
    @IsString()
    type: string;
}
