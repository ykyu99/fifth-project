import { prisma } from '../utils/prisma.util.js';



export class UserRepository {
  signInUser = async ( email ) => {
    
    const user = await prisma.user.findUnique({ where: { email } });

    return user;
    }

  createUser = async (email, password, name) => {

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