import express from 'express';
import { prisma } from '../utils/prisma.util.js';
import { ResumeRepository } from '../repositories/resumes.repositories.js';
import { ResumeService } from '../services/resumes.services.js';
import { ResumeController } from '../controllers/resumes.controllers.js';
import { createResumeValidator } from '../middlewares/validators/create-resume-validator.middleware.js';
import { updateResumeValidator } from '../middlewares/validators/updated-resume-validator.middleware.js';



const resumesRouter = express.Router();

const resumeRepository = new ResumeRepository(prisma);
const resumeService = new ResumeService(resumeRepository);
const resumeController = new ResumeController(resumeService);

resumesRouter.get('/', resumeController.getResumes);

resumesRouter.get('/:applyId', resumeController.getResumesDetail);

resumesRouter.post('/', createResumeValidator, resumeController.createResume);

resumesRouter.patch('/:applyId', updateResumeValidator, resumeController.updateResume);

resumesRouter.delete('/:applyId', resumeController.deleteResume);

export { resumesRouter };
