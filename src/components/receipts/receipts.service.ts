import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { Receipt } from './entities/receipt.entity';

@Injectable()
export class ReceiptsService {
  constructor(
    @InjectRepository(Receipt)
    private receiptsRepository: Repository<Receipt>,
  ) { }

  create(createReceiptDto: CreateReceiptDto): Promise<Receipt> {
    const receipt = this.receiptsRepository.create({
      ...createReceiptDto,
      transaction: { id: createReceiptDto.transactionId },
    });
    return this.receiptsRepository.save(receipt);
  }

  findAll(): Promise<Receipt[]> {
    return this.receiptsRepository.find({ relations: ['transaction'] });
  }

  findOne(id: number): Promise<Receipt | null> {
    return this.receiptsRepository.findOne({ where: { id }, relations: ['transaction'] });
  }

  async update(id: number, updateReceiptDto: UpdateReceiptDto): Promise<Receipt | null> {
    await this.receiptsRepository.update(id, updateReceiptDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.receiptsRepository.delete(id);
  }
}
