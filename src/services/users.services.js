import { HttpError } from '../errors/http.error.js';

export class UserService {
  constructor(UserRepository) {
    this.UserRepository = UserRepository;
  }

  signInUser = async (email) => {

      // 저장소(Repository)에게 데이터를 요청합니다.
      const user = await this.UserRepository.signInUser(email);

      return user;

  };

  createUser = async (email, password, name) => {
    try {
      // 저장소(Repository)에게 데이터를 요청합니다.
      const createdUser = await this.UserRepository.createUser(
        email,
        password,
        name,
      );
      if (!createdUser) {
        throw new HttpError.NotFound('User not found');
      }

      // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
      return {
        id: createdUser.id,
        email: createdUser.email,
        password: false,
        name: createdUser.name,
        role: createdUser.role,
        createdAt: createdUser.createdAt,
        updatedAt: createdUser.updatedAt,
      };
    } catch (err) {
      if (err instanceof HttpError.NotFound) {
        throw err;
      }
      throw new HttpError.InternalServerError(err.message);
    }
  };

  getUserById = async (id) => {
    try {
      // 저장소(Repository)에게 데이터를 요청합니다.
      const user = await this.UserRepository.getUserById(id);

      return user;
    } catch (err) {
      if (err instanceof HttpError.NotFound) {
        throw err;
      }
      throw new HttpError.InternalServerError(err.message);
    }
  };
}
