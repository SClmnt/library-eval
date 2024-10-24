import { Injectable } from '@nestjs/common';
import { Book } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  async findOne(id: number): Promise<Book> {
    return this.booksRepository.findOneBy({ id });
  }

  async create(book: Book): Promise<Book> {
    return this.booksRepository.save(book);
  }

  async update(id: number, book: Partial<Book>): Promise<Book> {
    await this.booksRepository.update(id, book);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }

  async rateBook(id: number, rating: number): Promise<Book> {
    const book = await this.booksRepository.findOneBy({ id });
    if (!book) {
      throw new Error('Book not found');
    }
    book.rating = rating;
    return this.booksRepository.save(book);
  }
}