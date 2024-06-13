import { prisma } from '../utils/prisma.util.js';


export class InfoRepository {
  getInfo = async ( id ) => {
    
    const getUser = await prisma.user.findUnique({ where: { id } });

    return getUser;
    }

  updateInfo = async ( id, password ) => {
    
    const updateUser = await prisma.user.update({ 
        where: { 
            id: +id,
          },
          data: {
            password,
          }, 
    });

    return updateUser;
    }

  deleteInfo = async ( id ) => {
    
    const deleteUser = await prisma.user.delete({ where: { id: +id } });
    
    return deleteUser;
    }

}