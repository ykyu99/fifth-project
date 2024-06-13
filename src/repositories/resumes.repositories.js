import { prisma } from '../utils/prisma.util.js';



export class ResumeRepository {
  getResumes = async ( userId ) => {
    
    const resume = await prisma.resume.findMany({ 
        where: { authorId : +userId },
        select: {
            id: true,
            authorId: true,
            title: true,
            content: true,
            status: true,
            createdAt: true,
            updatedAt: true,
          },
          orderBy: {
            createdAt: 'desc', // 이력서을 최신순으로 정렬합니다.
          }, });

    return resume;
    }

  resumeDetail = async ( userId, applyId ) => {
    
    const resumeDetail = await prisma.resume.findUnique({ 
        where: { 
            id : +applyId,
            authorId : +userId
        },
        select: {
            id: true,
            authorId: true,
            title: true,
            content: true,
            status: true,
            createdAt: true,
            updatedAt: true,
        }
     });

    return resumeDetail;
    }

  createResume = async (userId, title, content) => {

    const createResume = await prisma.resume.create({
      data: {
        authorId: userId,
        title,
        content,
      },
    });

    return createResume;
  };

  updateResume = async (userId, applyId, title, content) => {

    const updateResume = await prisma.resume.update({
      where: { 
        authorId: +userId,
        id: +applyId,
      },
      data: {
        title,
        content,
      },
    });

    return updateResume;
  };

  deleteResume = async (userId, applyId) => {

    const deleteResume = await prisma.resume.delete({
      where: { 
        authorId: +userId,
        id: +applyId,
      },
    });

    return deleteResume;
  };
}