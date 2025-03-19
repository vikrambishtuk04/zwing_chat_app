import { Controller, Get } from '@nestjs/common';
import { ChatService } from '../services/chat.service';

@Controller('chats')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('/list')
  chatList() {
    return 'Chat Service Running';
  }
}
