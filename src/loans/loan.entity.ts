import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Loan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookId: number;

  @Column()
  userId: number;

  @Column()
  borrowDate: Date;

  @Column()
  returnDate: Date;
}
