import { prisma } from '../utils/prisma.util.js';


export class InfoRepository {
  getInfo = async ( id ) => {
    
    const user = await prisma.user.findUnique({ where: { id } });

    return user;
    }


}