import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/list')
  userList() {
    return this.userService.getUserList();
  }
}
