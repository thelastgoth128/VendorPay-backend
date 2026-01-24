import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateChatParticipantDto {
    @IsNotEmpty()
    @IsNumber()
    chatId: number;

    @IsNotEmpty()
    @IsNumber()
    userId: number;
}
