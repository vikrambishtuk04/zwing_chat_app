import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/CreateUserDto';
import { ResponseDto } from 'src/common/dto/ResponeDto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<ResponseDto<User>> {
    //dummy user create
    // const user = {
    //   name: 'Shushank Gautam',
    //   mobile: '1111122222',
    //   email: 'gautam123@gmai.com',
    //   username: 'ShushankTestAudit',
    //   store_allocation_type: '1',
    //   role: 'cashier',
    //   allocateStore: 'PLUM Thane',
    //   status: '1',
    //   vu_id: 4638,
    //   createdat: '2025-03-05 09:43:48',
    //   updatedat: '2025-03-05 09:43:48',
    // };

    const createdUser = new this.userModel(createUserDto);
    //if the method directly returns the createdUser.save() then no nee to use await as nest will
    //  handle it automatically but since we are return a string we need to use await on save
    await createdUser.save();
    return new ResponseDto<User>(
      'success',
      'user added successfully',
      createdUser,
    );
  }
  async getUserList(): Promise<ResponseDto<User[]>> {
    const users = await this.userModel.find().exec();
    return new ResponseDto<User[]>(
      'success',
      'users fetched successfully',
      users,
    );
  }
}
