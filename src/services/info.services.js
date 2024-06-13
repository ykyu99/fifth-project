import { HttpError } from '../errors/http.error.js';

export class InfoService {
  constructor(InfoRepository) {
    this.InfoRepository = InfoRepository;
  }

  getInfo = async (id) => {
    try {
      // 저장소(Repository)에게 데이터를 요청합니다.
      const getUser = await this.InfoRepository.getInfo(id);
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
      // 저장소(Repository)에게 데이터를 요청합니다.
      const updateUser = await this.InfoRepository.updateInfo(id, password);
      if (!updateUser) {
        throw new HttpError.NotFound('User not found');
      }
      return updateUser;
    } catch (err) {
      if (err instanceof HttpError.NotFound) {
        throw err;
      }
      throw new HttpError.InternalServerError(err.message);
    }
  };

  deleteInfo = async (id) => {
    try {
      // 저장소(Repository)에게 데이터를 요청합니다.
      const deleteUser = await this.InfoRepository.deleteInfo(id);
      if (!deleteUser) {
        throw new HttpError.NotFound('User not found');
      }

      return deleteUser;
    } catch (err) {
      if (err instanceof HttpError.NotFound) {
        throw err;
      }
      throw new HttpError.InternalServerError(err.message);
    }
  };
}
