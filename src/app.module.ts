import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { LoansModule } from './loans/loans.module';
import { Book } from './books/book.entity';
import { User } from './users/user.entity';
import { Loan } from './loans/loan.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'library.db',
      entities: [Book, User, Loan],
      synchronize: true,
    }),
    BooksModule,
    UsersModule,
    LoansModule,
  ],
})
export class AppModule {}
