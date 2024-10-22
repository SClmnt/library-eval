import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { LoansService } from './loans.service';
import { Loan } from './loan.entity';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Post('borrow')
  borrow(@Body() loan: Loan) {
    return this.loansService.borrow(loan);
  }

  @Get('user/:id')
  findByUser(@Param('id') id: string) {
    return this.loansService.findByUser(+id);
  }

  @Get('is-borrowed/:bookId')
  isBookBorrowed(@Param('bookId') bookId: string) {
    return this.loansService.isBookBorrowed(+bookId);
  }
}