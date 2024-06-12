import { InfoRepository } from '../repositories/info.repositories.js';

export class InfoService {
    InfoRepository = new InfoRepository();

    getInfo = async ( id ) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const user = await this.InfoRepository.getInfo( id );

      return user;
  };
}