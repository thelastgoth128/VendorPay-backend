import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
  ) { }

  create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    const transaction = this.transactionsRepository.create({
      ...createTransactionDto,
      sender: { id: createTransactionDto.senderId },
      receiver: { id: createTransactionDto.receiverId },
    });
    return this.transactionsRepository.save(transaction);
  }

  findAll(): Promise<Transaction[]> {
    return this.transactionsRepository.find({ relations: ['sender', 'receiver'] });
  }

  findOne(id: number): Promise<Transaction | null> {
    return this.transactionsRepository.findOne({ where: { id }, relations: ['sender', 'receiver'] });
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto): Promise<Transaction | null> {
    await this.transactionsRepository.update(id, updateTransactionDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.transactionsRepository.delete(id);
  }
}
