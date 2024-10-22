import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.entity';
import { LoansService } from 'src/loans/loans.service';
import { RateBookDto } from './dto/rateBook.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService,
    private readonly loansService: LoansService,) {}

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Post()
  create(@Body() book: Book) {
    return this.booksService.create(book);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() book: Partial<Book>) {
    return this.booksService.update(+id, book);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }

  @Post(':id/rate')
  async rateBook(
    @Param('id') id: string,
    @Body() rateDto: RateBookDto
  ) {
    const loan = await this.loansService.findByUser(rateDto.userId);
    const hasBorrowed = loan.some(l => l.bookId === +id);

    if (!hasBorrowed) {
      throw new NotFoundException('You can only rate books you have borrowed');
    }

    return this.booksService.rateBook(+id, rateDto.rating);
  }
}