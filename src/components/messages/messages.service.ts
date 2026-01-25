import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messagesRepository: Repository<Message>,
  ) { }

  create(createMessageDto: CreateMessageDto): Promise<Message> {
    const message = this.messagesRepository.create({
      ...createMessageDto,
      sender: { id: createMessageDto.senderId },
      chat: { id: createMessageDto.chatId },
    });
    return this.messagesRepository.save(message);
  }

  findAll(): Promise<Message[]> {
    return this.messagesRepository.find({ relations: ['sender', 'chat'] });
  }

  findOne(id: number): Promise<Message | null> {
    return this.messagesRepository.findOne({ where: { id }, relations: ['sender', 'chat'] });
  }

  async update(id: number, updateMessageDto: UpdateMessageDto): Promise<Message | null> {
    await this.messagesRepository.update(id, updateMessageDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.messagesRepository.delete(id);
  }
}
