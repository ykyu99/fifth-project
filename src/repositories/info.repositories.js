import { HttpError } from '../errors/http.error.js';

export class InfoRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }
  getInfo = async (id) => {
    try {
      const getUser = await this.prisma.user.findUnique({ where: { id } });

      if (!getUser) {
        throw new HttpError.NotFound('User not found');
      }

      return getUser;
    } catch (err) {
      throw new HttpError.InternalServerError(err.message);
    }
  };

  updateInfo = async (id, password) => {
    try {
      const updateUser = await this.prisma.user.update({
        where: {
          id: +id,
        },
        data: {
          password,
        },
      });

      return updateUser;
    } catch (err) {
      if (err.code === 'P2025') {
        // Prisma error code for record not found
        throw new HttpError.NotFound('User not found');
      }
      throw new HttpError.InternalServerError(err.message);
    }
  };

  deleteInfo = async (id) => {
    try {
      const deleteUser = await this.prisma.user.delete({ where: { id: +id } });

      return deleteUser;
    } catch (err) {
      if (err.code === 'P2025') {
        // Prisma error code for record not found
        throw new HttpError.NotFound('User not found');
      }
      throw new HttpError.InternalServerError(err.message);
    }
  };
}
