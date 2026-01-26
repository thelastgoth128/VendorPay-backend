import { Injectable, NotFoundException } from '@nestjs/common';
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
      transaction: { id: createReceiptDto.transaction_id },
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
    const receipt = await this.receiptsRepository.findOne({where: {id: id}})
    if (!receipt) {
      throw new NotFoundException("Receipt not found")
    }

    Object.assign(receipt, updateReceiptDto);
    return await this.receiptsRepository.save(receipt);
  }

  async remove(id: number): Promise<void> {
    await this.receiptsRepository.delete(id);
  }
}
