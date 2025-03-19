import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserModule } from './modules/users/module';
import { ChatModule } from './modules/chats/module';
import { ChatGateway } from './modules/chats/chat.gateway';
import { ChatController } from './modules/chats/controllers/chat.controller';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/zwing_chat'),
    UserModule,
    ChatModule,
  ],
  controllers: [ChatController],
  providers: [ChatGateway],
})
export class AppModule {}
