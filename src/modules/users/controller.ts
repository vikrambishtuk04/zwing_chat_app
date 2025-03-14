import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/list')
  userList() {
    return 'User list underconstruction';
  }
  @Post('/create')
  userCreate() {
    return this.userService.create();
  }
  @Get('/update')
  userUpdate() {
    return 'User update underconstruction';
  }
  @Get('/delete')
  userDelete() {
    return 'User delete underconstruction';
  }
}
