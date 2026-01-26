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

  create(createTransactionDto: CreateTransactionDto) {
    const transaction = this.transactionsRepository.create({
      ...createTransactionDto,
      sender_id: { id: createTransactionDto.sender_id },
      receiver_id: { id: createTransactionDto.receiver_id },
    });
    return this.transactionsRepository.save(transaction);
  }

  findAll(): Promise<Transaction[]> {
    return this.transactionsRepository.find({ relations: ['sender_id', 'receiver_id '] });
  }

  findOne(id: number): Promise<Transaction | null> {
    return this.transactionsRepository.findOne({ where: { id }, relations: ['sender_id', 'receiver_id'] });
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto): Promise<Transaction | null> {
    await this.transactionsRepository.update(id, updateTransactionDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.transactionsRepository.delete(id);
  }
}
