import { ResumeService } from '../services/resumes.services.js';
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';




export class ResumeController {
  ResumeService = new ResumeService(); 

  getResumes = async (req, res, next) => {
    try {

      const { id: userId } = req.user;
        
      const resumes = await this.ResumeService.getResumes( userId );

      if (!resumes) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
          status: HTTP_STATUS.NOT_FOUND,
          message: MESSAGES.RESUMES.COMMON.NOT_FOUND,
        });
      }
      

      return res.status(HTTP_STATUS.OK).json({
        status: HTTP_STATUS.OK,
        message: MESSAGES.RESUMES.READ_LIST.SUCCEED,
        data: resumes,
      });
    } catch (err) {
      next(err);
    }
  };

  getResumesDetail = async (req, res, next) => {
    try {

      const { id: userId } = req.user;
      const { applyId } = req.params;
        
      const resumeDetail = await this.ResumeService.resumeDetail( userId, applyId );
      
      if (!resumeDetail) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
          status: HTTP_STATUS.NOT_FOUND,
          message: MESSAGES.RESUMES.COMMON.NOT_FOUND,
        });
      }

      return res.status(HTTP_STATUS.OK).json({
        status: HTTP_STATUS.OK,
        message: MESSAGES.RESUMES.READ_DETAIL.SUCCEED,
        data: resumeDetail,
      });
    } catch (err) {
      next(err);
    }
  };

  createResume = async (req, res, next) => {
    try {
      const { id: userId } = req.user;
      const { title, content } = req.body;
        
      const createResume = await this.ResumeService.createResume( userId, title, content );
      

      return res.status(HTTP_STATUS.CREATED).json({
        status: HTTP_STATUS.CREATED,
        message: MESSAGES.RESUMES.CREATE.SUCCEED,
        data: createResume,
      });
    } catch (err) {
      next(err);
    }
  };

  updateResume = async (req, res, next) => {
    try {
      const { id: userId } = req.user;
      const { title, content } = req.body;
      const { applyId } = req.params;

      const existedResume = await this.ResumeService.resumeDetail( userId, applyId );

      if (!existedResume) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
          status: HTTP_STATUS.NOT_FOUND,
          message: MESSAGES.RESUMES.COMMON.NOT_FOUND,
        });
      }
      if ( userId != existedResume.authorId ) {
        return res.status(HTTP_STATUS.FORBIDDEN).json({
          status: HTTP_STATUS.FORBIDDEN,
          message: MESSAGES.RESUMES.COMMON.UNAUTH,
        });
      }

        
      const updateResume = await this.ResumeService.updateResume( userId, applyId, title, content );
      

      return res.status(HTTP_STATUS.OK).json({
        status: HTTP_STATUS.OK,
        message: MESSAGES.RESUMES.READ_DETAIL.SUCCEED,
        data: updateResume,
      });
    } catch (err) {
      next(err);
    }
  };

  deleteResume = async (req, res, next) => {
    try {
      
      const { id: userId } = req.user;
      const { applyId } = req.params;

      const existedResume = await this.ResumeService.resumeDetail( userId, applyId );

      if (!existedResume) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
          status: HTTP_STATUS.NOT_FOUND,
          message: MESSAGES.RESUMES.COMMON.NOT_FOUND,
        });
      }
      if ( userId != existedResume.authorId ) {
        return res.status(HTTP_STATUS.FORBIDDEN).json({
          status: HTTP_STATUS.FORBIDDEN,
          message: MESSAGES.RESUMES.COMMON.UNAUTH,
        });
      }
        
      const deleteResume = await this.ResumeService.deleteResume( userId, applyId );
      

      return res.status(HTTP_STATUS.OK).json({
        status: HTTP_STATUS.OK,
        message: MESSAGES.RESUMES.READ_DETAIL.SUCCEED,
        data: deleteResume,
      });
    } catch (err) {
      next(err);
    }
  };
}