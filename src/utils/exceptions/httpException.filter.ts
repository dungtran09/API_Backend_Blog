import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(NotFoundException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private logger: Logger) {}

  catch(exception: NotFoundException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const resquest = context.getRequest<Request>();
    const status = exception.getStatus();
    const message = exception.initMessage();
    this.logger.error(
      `${resquest.method} ${resquest.originalUrl} ${status} error: ${exception.message}`,
    );
    response.status(status).json({
      message,
      statusCode: status,
      time: new Date().toISOString(),
    });
  }
}
