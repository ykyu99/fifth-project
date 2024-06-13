import express from 'express';
import { prisma } from '../utils/prisma.util.js';
import { UserRepository } from '../repositories/users.repositories.js';
import { UserService } from '../services/users.services.js';
import { UserController } from '../controllers/users.controllers.js';
import { signUpValidator } from '../middlewares/validators/sign-up-validator.middleware.js';
import { signInValidator } from '../middlewares/validators/sign-in-validator.middleware.js';


const authRouter = express.Router();

const userRepository = new UserRepository(prisma);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

authRouter.post('/sign-in', signInValidator, userController.getUser);

authRouter.post('/sign-up', signUpValidator, userController.createUser);

export { authRouter };

