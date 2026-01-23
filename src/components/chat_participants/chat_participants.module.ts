import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatParticipantsService } from './chat_participants.service';
import { ChatParticipantsController } from './chat_participants.controller';
import { ChatParticipant } from './entities/chat_participant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatParticipant])],
  controllers: [ChatParticipantsController],
  providers: [ChatParticipantsService],
  exports: [ChatParticipantsService],
})
export class ChatParticipantsModule { }
