import bcrypt from 'bcrypt';
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';
import { HASH_SALT_ROUNDS } from '../constants/auth.constant.js';



// User의 컨트롤러(Controller)역할을 하는 클래스
export class InfoController {
  constructor(InfoService) {
    this.InfoService = InfoService;
  }

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


    updateInfo = async (req, res, next) => {
    try {
      const { password } = req.body;
      const { id: id } = req.user;
      
      const hashedPassword = bcrypt.hashSync(password, HASH_SALT_ROUNDS);

      // 서비스 계층에 구현된 signInUser 로직을 실행합니다.
      const updateUser = await this.InfoService.updateInfo( id, hashedPassword );


      return res.status(HTTP_STATUS.OK).json({
        status: HTTP_STATUS.OK,
        message: MESSAGES.USERS.UPDATE.SUCCEED,
        data: updateUser,
      });
    } catch (err) {
      next(err);
    }
  };


    deleteInfo = async (req, res, next) => {
    try {

      const { id: id } = req.user;
        
      // 서비스 계층에 구현된 signInUser 로직을 실행합니다.
      const deleteUser = await this.InfoService.deleteInfo( id );


      return res.status(HTTP_STATUS.OK).json({
        status: HTTP_STATUS.OK,
        message: MESSAGES.USERS.DELETE.SUCCEED,
        data: { email : deleteUser.email }
      });
    } catch (err) {
      next(err);
    }
  };
}