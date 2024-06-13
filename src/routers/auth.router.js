import express from 'express';
import { signUpValidator } from '../middlewares/validators/sign-up-validator.middleware.js';
import { signInValidator } from '../middlewares/validators/sign-in-validator.middleware.js';
import { UserController } from '../controllers/users.controllers.js';


const authRouter = express.Router();

const userControllers = new UserController();

authRouter.post('/sign-in', signInValidator, userControllers.getUser);

authRouter.post('/sign-up', signUpValidator, userControllers.createUser);

export { authRouter };

