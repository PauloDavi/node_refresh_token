import dayjs from 'dayjs';

import { CustomException } from '../../exceptions/CustomException';
import { client } from '../../prisma/client';
import { GenerateRefreshTokenProvider } from '../../provider/GenerateRefreshTokenProvider';
import { GenerateTokenProvider } from '../../provider/GenerateTokenProvider';

class RefreshTokenUserUseCase {
  async execute(refreshTokenId: number) {
    const refreshToken = await client.refreshToken.findFirst({
      where: {
        id: refreshTokenId,
      },
    });

    if (!refreshToken) {
      throw new CustomException('Refresh token invalid.', 400);
    }

    const refreshTokenExpired = dayjs().isAfter(
      dayjs.unix(refreshToken.expiresIn)
    );

    const generateTokenProvider = new GenerateTokenProvider();

    const token = await generateTokenProvider.execute(refreshToken.userId);

    if (refreshTokenExpired) {
      await client.refreshToken.deleteMany({
        where: {
          userId: refreshToken.userId,
        },
      });

      const generateRefreshTokenProvider = new GenerateRefreshTokenProvider();

      const newRefreshToken = await generateRefreshTokenProvider.execute(
        refreshToken.userId
      );
      return { token, refreshToken: newRefreshToken };
    }

    return { token };
  }
}

export { RefreshTokenUserUseCase };
