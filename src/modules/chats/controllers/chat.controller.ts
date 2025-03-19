import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ChatService } from '../services/chat.service';
import { Socket } from 'socket.io';
  
@Controller('chats')
export class ChatController {
  constructor(private readonly chatService: ChatService,
    @Inject('SOCKET.IO') private readonly socket: Socket,
  ) {}

  @Get('/list')
  chatList() {
    return 'Chat Service Running';
  }

  @Get('/send/:message')
  sendMessage(@Param('message')message:String) {
    this.socket.emit('chatMessage', message);
    return 'Message Sent';
  }
}
