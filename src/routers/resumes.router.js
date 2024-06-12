import express from 'express';
import { createResumeValidator } from '../middlewares/validators/create-resume-validator.middleware.js';
import { updateResumeValidator } from '../middlewares/validators/updated-resume-validator.middleware.js';
import { ResumeController } from '../controllers/resumes.controllers.js';


const resumesRouter = express.Router();

const resumeController = new ResumeController();

resumesRouter.get('/', resumeController.getResumes);

resumesRouter.get('/:applyId', resumeController.getResumesDetail);

resumesRouter.post('/', createResumeValidator, resumeController.createResume);

resumesRouter.patch('/:applyId', updateResumeValidator, resumeController.updateResume);

resumesRouter.delete('/:applyId', resumeController.deleteResume);

export { resumesRouter };
