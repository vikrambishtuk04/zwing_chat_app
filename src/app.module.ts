import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/users/module';
import { ChatModule } from './modules/chats/module';
import { FileModule } from './common/modules/file.modules';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/zwing_chat'),
    UserModule,
    ChatModule,
    FileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
