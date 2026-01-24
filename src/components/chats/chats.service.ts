import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatsService {
  constructor(
    @InjectRepository(Chat)
    private chatsRepository: Repository<Chat>,
  ) { }

  create(createChatDto: CreateChatDto): Promise<Chat> {
    const chat = this.chatsRepository.create(createChatDto);
    return this.chatsRepository.save(chat);
  }

  findAll(): Promise<Chat[]> {
    return this.chatsRepository.find();
  }

  findOne(id: number): Promise<Chat | null> {
    return this.chatsRepository.findOneBy({ id });
  }

  async update(id: number, updateChatDto: UpdateChatDto): Promise<Chat | null> {
    await this.chatsRepository.update(id, updateChatDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.chatsRepository.delete(id);
  }
}
