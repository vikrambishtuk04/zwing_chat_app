import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/list/:id')
  userList(@Param('id') id: string) {
    return this.userService.getUserList(id);
  }
}
