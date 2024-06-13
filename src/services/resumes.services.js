import { ResumeRepository } from '../repositories/resumes.repositories.js';

export class ResumeService {
    ResumeRepository = new ResumeRepository();

    getResumes = async ( userId ) => {

    const resumes = await this.ResumeRepository.getResumes( userId );

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
    };

    resumeDetail = async (userId, applyId) => {

    const resumeDetail = await this.ResumeRepository.resumeDetail(
      userId,
      applyId,
    );

    return resumeDetail;
    };
  
    createResume = async (userId, title, content) => {

    const createResume = await this.ResumeRepository.createResume(
      userId,
      title,
      content,
    );

    return createResume;
    };

    updateResume = async (userId, applyId, title, content) => {

    const updateResume = await this.ResumeRepository.updateResume(
      userId,
      applyId,
      title,
      content,
    );

    return updateResume;
    };


    deleteResume = async (userId, applyId) => {

        const deleteResume = await this.ResumeRepository.deleteResume(
          userId,
          applyId,
        );
    
        return deleteResume;
    };
  
}