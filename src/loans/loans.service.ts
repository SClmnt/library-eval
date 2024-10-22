import { Injectable } from '@nestjs/common';
import { Loan } from './loan.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LoansService {
  constructor(
    @InjectRepository(Loan)
    private loansRepository: Repository<Loan>,
  ) {}

  async borrow(loan: Loan): Promise<Loan> {
    return this.loansRepository.save(loan);
  }

  async findByUser(userId: number): Promise<Loan[]> {
    return this.loansRepository.find({ where: { userId } });
  }

  async isBookBorrowed(bookId: number): Promise<boolean> {
    const loan = await this.loansRepository.findOneBy({ bookId });
    return !!loan;
  }

  async returnBook(id: number): Promise<void> {
    await this.loansRepository.delete(id);
  }
}