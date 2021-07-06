/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

import { CustomException } from '../exceptions/CustomException';

function exceptionsMiddleware(
  error: Error | CustomException,
  _request: Request,
  response: Response,
  _next: NextFunction
) {
  if (error instanceof CustomException) {
    return response.status(error.statusCode || 500).json({
      status: 'error',
      message: error.message,
      ...error.data,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: error.message,
  });
}

export { exceptionsMiddleware };
