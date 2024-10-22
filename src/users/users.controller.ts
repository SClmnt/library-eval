import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  register(@Body() user: User) {
    return this.usersService.create(user);
  }

  @Post('login')
  async login(@Body() user: { username: string; password: string }) {
    const foundUser = await this.usersService.findOne(user.username);
    if (foundUser && foundUser.password === user.password) {
      return { message: 'Login successful', user: foundUser };
    }
    return { message: 'Invalid credentials' };
  }
}