import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const isProduction = process.env.NODE_ENV === 'prod';
    //this checks if the exception is httpexception then pick status from exception
    //else pick internal server error(500) as default status
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = isProduction
      ? 'Something went wrong! Please try again later.' // Hide error details in production
      : exception.message || 'Unknown error occurred';
    const body = {
      success: false,
      message,
      ...(isProduction ? {} : { error: exception.stack }), // Show stack trace only in development
    };

    response.status(status).json(body);
  }
}
