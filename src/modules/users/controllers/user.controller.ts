import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/list')
  userList() {
    return this.userService.getUserList();
  }
}
