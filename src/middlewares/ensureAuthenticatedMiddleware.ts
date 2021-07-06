/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { CustomException } from '../exceptions/CustomException';

function ensureAuthenticatedMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    throw new CustomException('Token is missing', 401);
  }

  const [, token] = authToken.split(' ');

  try {
    const payload = verify(token, process.env.JWT_KEY);
    request.userId = Number(payload.sub);

    return next();
  } catch (error) {
    throw new CustomException('Token invalid', 401);
  }
}

export { ensureAuthenticatedMiddleware };
