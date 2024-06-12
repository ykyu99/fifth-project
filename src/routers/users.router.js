import express from 'express';
import { requireAccessToken } from '../middlewares/require-access-token.middleware.js';
import { InfoController } from '../controllers/info.controllers.js';

const infoRouter = express.Router();

const infoController = new InfoController();

infoRouter.get('/me', requireAccessToken, infoController.getInfo);

export { infoRouter };
