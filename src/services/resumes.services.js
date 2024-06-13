import { HttpError } from '../errors/http.error.js';

export class ResumeService {
  constructor(ResumeRepository) {
    this.ResumeRepository = ResumeRepository;
  }

  getResumes = async (userId) => {
    try {
      const resumes = await this.ResumeRepository.getResumes(userId);

      if (!resumes) {
        throw new HttpError.NotFound('resume not found');
      }

      return resumes.map((resume) => {
        return {
          id: resume.id,
          authorId: resume.authorId,
          title: resume.title,
          content: resume.content,
          status: resume.status,
          createdAt: resume.createdAt,
          updatedAt: resume.updatedAt,
        };
      });
    } catch (err) {
      if (err instanceof HttpError.NotFound) {
        throw err;
      }
      throw new HttpError.InternalServerError(err.message);
    }
  };

  resumeDetail = async (userId, applyId) => {
    try {
      const resumeDetail = await this.ResumeRepository.resumeDetail(
        userId,
        applyId,
      );

      if (!resumeDetail) {
        throw new HttpError.NotFound('resume not found');
      }
      return resumeDetail;
    } catch (err) {
      if (err instanceof HttpError.NotFound) {
        throw err;
      }
      throw new HttpError.InternalServerError(err.message);
    }
  };

  createResume = async (userId, title, content) => {
    try {
      const createResume = await this.ResumeRepository.createResume(
        userId,
        title,
        content,
      );
      if (!createResume) {
        throw new HttpError.NotFound('resume not found');
      }

      return createResume;
    } catch (err) {
      if (err instanceof HttpError.NotFound) {
        throw err;
      }
      throw new HttpError.InternalServerError(err.message);
    }
  };

  updateResume = async (userId, applyId, title, content) => {
    try {
      const updateResume = await this.ResumeRepository.updateResume(
        userId,
        applyId,
        title,
        content,
      );
      if (!updateResume) {
        throw new HttpError.NotFound('resume not found');
      }
      return updateResume;
    } catch (err) {
      if (err instanceof HttpError.NotFound) {
        throw err;
      }
      throw new HttpError.InternalServerError(err.message);
    }
  };

  deleteResume = async (userId, applyId) => {
    try {
      const deleteResume = await this.ResumeRepository.deleteResume(
        userId,
        applyId,
      );
      if (!deleteResume) {
        throw new HttpError.NotFound('resume not found');
      }

      return deleteResume;
    } catch (err) {
      if (err instanceof HttpError.NotFound) {
        throw err;
      }
      throw new HttpError.InternalServerError(err.message);
    }
  };
}
