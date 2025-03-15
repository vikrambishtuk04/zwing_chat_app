export class ResponseDto<T> {
  status: string;
  message: string;
  data?: T;
  error?: string;
  constructor(status: string, message: string, data?: T, error?: string) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.error = error;
  }
}
