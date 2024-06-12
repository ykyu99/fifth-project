import { UserService } from '../services/posts.service.js';

// User의 컨트롤러(Controller)역할을 하는 클래스
export class UserController {
    UserService = new UserService(); // User 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.

  getUser = async (req, res, next) => {
    try {
      // 서비스 계층에 구현된 signInUser 로직을 실행합니다.
      const user = await this.UserService.signInUser();

      return res.status(200).json({ data: user });
    } catch (err) {
      next(err);
    }
  };

  createUser = async (req, res, next) => {
    try {
      const { email, password, name } = req.body;

      // 서비스 계층에 구현된 createUser 로직을 실행합니다.
      const createdUser = await this.UserService.createUser(
        email,
        password,
        name,
      );

      return res.status(201).json({ data: createdUser });
    } catch (err) {
      next(err);
    }
  };
}