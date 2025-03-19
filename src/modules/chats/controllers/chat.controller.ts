import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';   
import { ChatService } from '../services/chat.service';
import { fileUploadHelper } from '../../../common/helper/file.upload';
import { FileService } from '../../../common/service/file.service';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('chats')
export class ChatController {
  constructor(private readonly chatService: ChatService, private readonly fileService: FileService) {}

  @Get('/list')
  chatList() {
    return 'Chat Service Running';
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file', fileUploadHelper))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return { status: false, message: 'No file uploaded' };
    }
    return { status: true, message: 'File uploaded successfully', filePath: this.fileService.getFilePath(file) };
  }
}
