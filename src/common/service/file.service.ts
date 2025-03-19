import { Injectable } from '@nestjs/common';

@Injectable()
export class FileService {
  getFilePath(file: Express.Multer.File): string {
    return file.path;
  }
}
