import { IsNotEmpty, IsNumber } from 'class-validator';

export class RateBookDto {
  @IsNotEmpty()
  @IsNumber()
  rating: number;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
