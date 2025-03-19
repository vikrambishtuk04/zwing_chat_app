import { Module } from '@nestjs/common';
import { ChatController } from './controllers/chat.controller';
import { ChatService } from './services/chat.service';
import { FileService } from '../../common/service/file.service';  // Add this import

@Module({
  imports: [
    //User.name i.e. "User" defines the collection name in the database and use
    //userSchema to define the schema
    //below line makes the User model instance injection available to use in other services
    //Go to service.ts to see how to use this model instance
    // MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
  ],
  controllers: [ChatController],
  providers: [ChatService, FileService],
})
export class ChatModule {}
