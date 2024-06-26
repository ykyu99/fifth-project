import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';
import { ACCESS_TOKEN_EXPIRES_IN } from '../constants/auth.constant.js';
import { ACCESS_TOKEN_SECRET } from '../constants/env.constant.js';
import { HASH_SALT_ROUNDS } from '../constants/auth.constant.js';

// User의 컨트롤러(Controller)역할을 하는 클래스
export class UserController {
  constructor(UserService) {
    this.UserService = UserService;
  }

  getUser = async (req, res, next) => {
    try {

      const { email, password } = req.body;
        
      // 서비스 계층에 구현된 signInUser 로직을 실행합니다.
      const user = await this.UserService.signInUser( email );
      
      if (!user) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
          status: HTTP_STATUS.NOT_FOUND,
          message: MESSAGES.AUTH.COMMON.UNAUTHORIZED,
        });
      }

      const isPasswordMatched =
      user && bcrypt.compareSync(password, user.password);

    if (!isPasswordMatched) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({
        status: HTTP_STATUS.UNAUTHORIZED,
        message: MESSAGES.AUTH.COMMON.UNAUTHORIZED,
      });
    }

      const payload = { id: user.id };

      const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
        expiresIn: ACCESS_TOKEN_EXPIRES_IN,
      });

      res.setHeader('Authorization', `Bearer ${accessToken}`);

      return res.status(HTTP_STATUS.OK).json({
        status: HTTP_STATUS.OK,
        message: MESSAGES.AUTH.SIGN_IN.SUCCEED,
        data: { user, accessToken },
      });
    } catch (err) {
      next(err);
    }
  };

  createUser = async (req, res, next) => {
    try {
      const { email, password, name } = req.body;

      const existedUser = await this.UserService.signInUser( email );

    // 이메일이 중복된 경우
    if (existedUser) {
      return res.status(HTTP_STATUS.CONFLICT).json({
        status: HTTP_STATUS.CONFLICT,
        message: MESSAGES.AUTH.COMMON.EMAIL.DUPLICATED,
      });
    }

      const hashedPassword = bcrypt.hashSync(password, HASH_SALT_ROUNDS);
      
      // 서비스 계층에 구현된 createUser 로직을 실행합니다.
      const createdUser = await this.UserService.createUser(
        email,
        hashedPassword,
        name,
      );

      return res.status(HTTP_STATUS.CREATED).json({
        status: HTTP_STATUS.CREATED,
        message: MESSAGES.AUTH.SIGN_UP.SUCCEED,
        data: createdUser,
      });
    } catch (err) {
      next(err);
    }
  };
}