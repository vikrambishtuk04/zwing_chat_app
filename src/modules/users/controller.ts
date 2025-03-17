import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './service';
import { CreateUserDto } from './dto/CreateUserDto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/list')
  userList() {
    return this.userService.getUserList();
  }
  @Post('/create')
  userCreate(@Body() CreateUserDto: CreateUserDto) {
    return this.userService.create(CreateUserDto);
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
