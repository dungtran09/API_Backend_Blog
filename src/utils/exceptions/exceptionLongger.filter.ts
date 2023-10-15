import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class ExceptionsLongerFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost): void {
    console.error('Exteption throw', exception);
    super.catch(exception, host);
  }
}
