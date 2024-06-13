import { HttpError } from '../errors/http.error.js';

export class UserRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }
  signInUser = async (email) => {

      const user = await this.prisma.user.findUnique({ where: { email } });

      return user;
        
  };

  createUser = async (email, password, name) => {
    try {
      const createdUser = await this.prisma.user.create({
        data: {
          email,
          password,
          name,
        },
      });

      return createdUser;
    } catch (err) {
      if (err.code === 'P2025') {
        // Prisma error code for record not found
        throw new HttpError.NotFound('User not found');
      }
      throw new HttpError.InternalServerError(err.message);
    }
  };

  getUserById = async (id) => {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id },
        omit: { password: true },
      });

      if (!user) {
        throw new HttpError.NotFound('User not found');
      }

      return user;
    } catch (err) {
      throw new HttpError.InternalServerError(err.message);
    }
  };
}
