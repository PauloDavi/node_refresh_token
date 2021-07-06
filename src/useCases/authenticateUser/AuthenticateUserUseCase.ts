import { compare } from 'bcryptjs';

import { CustomException } from '../../exceptions/CustomException';
import { client } from '../../prisma/client';
import { GenerateRefreshTokenProvider } from '../../provider/GenerateRefreshTokenProvider';
import { GenerateTokenProvider } from '../../provider/GenerateTokenProvider';

interface AuthenticateUserUseCaseProps {
  email: string;
  password: string;
}

class AuthenticateUserUseCase {
  async execute({ email, password }: AuthenticateUserUseCaseProps) {
    const userAlreadyExist = await client.user.findFirst({
      where: {
        email,
      },
    });

    if (!userAlreadyExist) {
      throw new CustomException('User/Password incorrect.');
    }

    const passwordMatch = await compare(password, userAlreadyExist.password);

    if (!passwordMatch) {
      throw new CustomException('User/Password incorrect.');
    }

    const generateTokenProvider = new GenerateTokenProvider();

    const token = await generateTokenProvider.execute(userAlreadyExist.id);

    await client.refreshToken.deleteMany({
      where: {
        userId: userAlreadyExist.id,
      },
    });

    const generateRefreshToken = new GenerateRefreshTokenProvider();
    const refreshToken = await generateRefreshToken.execute(
      userAlreadyExist.id
    );

    return { token, refreshToken };
  }
}

export { AuthenticateUserUseCase };
