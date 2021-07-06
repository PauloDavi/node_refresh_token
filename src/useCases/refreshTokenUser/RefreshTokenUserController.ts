import { Request, Response } from 'express';

import { RefreshTokenUserUseCase } from './RefreshTokenUserUseCase';

class RefreshTokenUserController {
  async handle(request: Request, response: Response) {
    const { refreshTokenId } = request.body;

    const refreshTokenUserUseCase = new RefreshTokenUserUseCase();

    const token = await refreshTokenUserUseCase.execute(refreshTokenId);

    return response.json(token);
  }
}

export { RefreshTokenUserController };
