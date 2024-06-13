import express from 'express';
import { prisma } from '../utils/prisma.util.js';
import { InfoRepository } from '../repositories/info.repositories.js';
import { InfoService } from '../services/info.services.js';
import { InfoController } from '../controllers/info.controllers.js';
import { requireAccessToken } from '../middlewares/require-access-token.middleware.js';
import { updateUserValidator } from '../middlewares/validators/updated-user-validator.middleware.js';


const infoRouter = express.Router();

const infoRepository = new InfoRepository(prisma);
const infoService = new InfoService(infoRepository);
const infoController = new InfoController(infoService);

infoRouter.get('/', requireAccessToken, infoController.getInfo);

infoRouter.patch('/', requireAccessToken, updateUserValidator, infoController.updateInfo);

infoRouter.delete('/', requireAccessToken, infoController.deleteInfo);

export { infoRouter };
