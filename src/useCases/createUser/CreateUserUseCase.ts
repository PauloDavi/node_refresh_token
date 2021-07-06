import { hash } from 'bcryptjs';

import { CustomException } from '../../exceptions/CustomException';
import { client } from '../../prisma/client';

interface CreateUserUseCaseProps {
  name: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  async execute({ email, name, password }: CreateUserUseCaseProps) {
    const userAlreadyExist = await client.user.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExist) {
      throw new CustomException('User already exist.', 400);
    }

    const passwordHash = await hash(password, 8);

    const user = await client.user.create({
      data: { email, name, password: passwordHash },
    });

    return user;
  }
}

export { CreateUserUseCase };
