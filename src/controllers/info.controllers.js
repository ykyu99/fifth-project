import { InfoService } from '../services/info.services.js';
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';


// User의 컨트롤러(Controller)역할을 하는 클래스
export class InfoController {
    InfoService = new InfoService(); // User 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.

    getInfo = async (req, res, next) => {
    try {

      const { id: id } = req.user;
        
      // 서비스 계층에 구현된 signInUser 로직을 실행합니다.
      const user = await this.InfoService.getInfo( id );


      return res.status(HTTP_STATUS.OK).json({
        status: HTTP_STATUS.OK,
        message: MESSAGES.USERS.READ_ME.SUCCEED,
        data: user,
      });
    } catch (err) {
      next(err);
    }
  };
}