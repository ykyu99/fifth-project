import express from 'express';
import { requireAccessToken } from '../middlewares/require-access-token.middleware.js';
import { updateUserValidator } from '../middlewares/validators/updated-user-validator.middleware.js';
import { InfoController } from '../controllers/info.controllers.js';

const infoRouter = express.Router();

const infoController = new InfoController();

infoRouter.get('/', requireAccessToken, infoController.getInfo);

infoRouter.patch('/', requireAccessToken, updateUserValidator, infoController.updateInfo);

infoRouter.delete('/', requireAccessToken, infoController.deleteInfo);

export { infoRouter };
