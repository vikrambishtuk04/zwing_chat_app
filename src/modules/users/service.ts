import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create() {
    const user = {
      name: 'Shushank Gautam',
      mobile: '1111122222',
      email: 'gautam123@gmai.com',
      username: 'ShushankTestAudit',
      store_allocation_type: '1',
      role: 'cashier',
      allocateStore: 'PLUM Thane',
      status: '1',
      vu_id: 4638,
      createdat: '2025-03-05 09:43:48',
      updatedat: '2025-03-05 09:43:48',
    };
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }
}
