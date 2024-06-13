import { InfoRepository } from '../repositories/info.repositories.js';

export class InfoService {
    InfoRepository = new InfoRepository();

    getInfo = async ( id ) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const getUser = await this.InfoRepository.getInfo( id );

      return getUser;
  };

    updateInfo = async ( id, password ) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const updateUser = await this.InfoRepository.updateInfo( id, password );

      return updateUser;
  };

    deleteInfo = async ( id ) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const deleteUser = await this.InfoRepository.deleteInfo( id );

      return deleteUser;
  };
}