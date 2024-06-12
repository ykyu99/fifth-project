import bcrypt from 'bcrypt';
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';
import { prisma } from '../utils/index.js';

export class UserRepository {
  signInUser = async ( email, password ) => {
    // ORM인 Prisma에서 User 모델의 findFirst 메서드를 사용해 데이터를 요청합니다.
    const user = await prisma.user.findFirst({ 
        where: { email } 
    });

    if (!(await bcrypt.compare(password, user.password)))
        return res.status(HTTP_STATUS.CREATED).json({
            status: HTTP_STATUS.CREATED,
            message: MESSAGES.AUTH.SIGN_UP.SUCCEED,
            user,
          });

    return user;
    }

  createUser = async (email, password, name) => {
    // ORM인 Prisma에서 User 모델의 create 메서드를 사용해 데이터를 요청합니다.
    const createdUser = await prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });

    return createdUser;
  };
}