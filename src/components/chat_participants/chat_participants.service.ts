import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChatParticipantDto } from './dto/create-chat_participant.dto';
import { UpdateChatParticipantDto } from './dto/update-chat_participant.dto';
import { ChatParticipant } from './entities/chat_participant.entity';

@Injectable()
export class ChatParticipantsService {
  constructor(
    @InjectRepository(ChatParticipant)
    private chatParticipantsRepository: Repository<ChatParticipant>,
  ) { }

  create(createChatParticipantDto: CreateChatParticipantDto): Promise<ChatParticipant> {
    const participant = this.chatParticipantsRepository.create({
      chat: { id: createChatParticipantDto.chatId },
      user: { id: createChatParticipantDto.userId },
    });
    return this.chatParticipantsRepository.save(participant);
  }

  findAll(): Promise<ChatParticipant[]> {
    return this.chatParticipantsRepository.find({ relations: ['chat', 'user'] });
  }

  findOne(id: number): Promise<ChatParticipant | null> {
    return this.chatParticipantsRepository.findOne({ where: { id }, relations: ['chat', 'user'] });
  }

  async update(id: number, updateChatParticipantDto: UpdateChatParticipantDto): Promise<ChatParticipant | null> {
    // Note: Updating relationships usually requires loading the entity first or using QueryBuilder
    // For simplicity, we just delete and re-create or handle basic fields if any
    // For now, let's just assume we might want to update the role or something if we had it.
    // Since our entity is just links, update is rare.
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.chatParticipantsRepository.delete(id);
  }
}
