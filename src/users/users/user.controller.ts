import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Public } from '../../auth/auth/auth.metadata';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  @Public()
  async addUser(@Body() user: User) {
    return this.userService.addUser(user);
  }
}
