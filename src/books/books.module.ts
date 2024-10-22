import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Loan } from 'src/loans/loan.entity';
import { LoansService } from 'src/loans/loans.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Loan])],
  controllers: [BooksController],
  providers: [BooksService, LoansService]
})
export class BooksModule {}
