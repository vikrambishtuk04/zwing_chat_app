import { Module } from '@nestjs/common';
import { UserController } from './controller';
import { User, userSchema } from './schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './service';

@Module({
  imports: [
    //User.name i.e. "User" defines the collection name in the database and use
    //userSchema to define the schema
    //below line makes the User model instance injection available to use in other services
    //Go to service.ts to see how to use this model instance
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
