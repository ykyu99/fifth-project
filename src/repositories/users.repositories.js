import { prisma } from '../utils/prisma.util.js';



export class UserRepository {
  signInUser = async ( email ) => {
    
    // ORM인 Prisma에서 User 모델의 findFirst 메서드를 사용해 데이터를 요청합니다.
    const user = await prisma.user.findUnique({ where: { email } });

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