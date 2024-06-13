import { HttpError } from '../errors/http.error.js';

export class ResumeRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }
  getResumes = async (userId) => {
    try {
      const resume = await this.prisma.resume.findMany({
        where: { authorId: +userId },
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
        },
      });

      if (!resume) {
        throw new HttpError.NotFound('User not found');
      }

      return resume;
    } catch (err) {
      throw new HttpError.InternalServerError(err.message);
    }
  };

  resumeDetail = async (userId, applyId) => {
    try {
      const resumeDetail = await this.prisma.resume.findUnique({
        where: {
          id: +applyId,
          authorId: +userId,
        },
        select: {
          id: true,
          authorId: true,
          title: true,
          content: true,
          status: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      if (!resumeDetail) {
        throw new HttpError.NotFound('User not found');
      }

      return resumeDetail;
    } catch (err) {
      throw new HttpError.InternalServerError(err.message);
    }
  };

  createResume = async (userId, title, content) => {
    try {
      const createResume = await this.prisma.resume.create({
        data: {
          authorId: userId,
          title,
          content,
        },
      });

      return createResume;
    } catch (err) {
      if (err.code === 'P2025') {
        // Prisma error code for record not found
        throw new HttpError.NotFound('User not found');
      }
      throw new HttpError.InternalServerError(err.message);
    }
  };

  updateResume = async (userId, applyId, title, content) => {
    try {
      const updateResume = await this.prisma.resume.update({
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
    } catch (err) {
      if (err.code === 'P2025') {
        // Prisma error code for record not found
        throw new HttpError.NotFound('User not found');
      }
      throw new HttpError.InternalServerError(err.message);
    }
  };

  deleteResume = async (userId, applyId) => {
    try {
      const deleteResume = await this.prisma.resume.delete({
        where: {
          authorId: +userId,
          id: +applyId,
        },
      });

      return deleteResume;
    } catch (err) {
      if (err.code === 'P2025') {
        // Prisma error code for record not found
        throw new HttpError.NotFound('User not found');
      }
      throw new HttpError.InternalServerError(err.message);
    }
  };
}
