import { diskStorage } from 'multer';
import { extname } from 'path';

export const fileUploadHelper = {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = extname(file.originalname);
      callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size (10MB)
};
