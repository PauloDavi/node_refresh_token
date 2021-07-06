import { sign } from 'jsonwebtoken';

class GenerateTokenProvider {
  async execute(userId: number) {
    const token = sign({}, process.env.JWT_KEY, {
      subject: String(userId),
      expiresIn: process.env.JWT_EXPIRED_IN,
    });

    return token;
  }
}
export { GenerateTokenProvider };
