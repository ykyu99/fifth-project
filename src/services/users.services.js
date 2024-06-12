// src/services/posts.service.js

import { UserRepository } from '../repositories/users.repository.js';

export class UserService {
    UserRepository = new UserRepository();

    signInUser = async () => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const users = await this.UserRepository.signInUser();

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return users.map((user) => {
      return {
        id: user.id,
        email: user.email,
        password: user.password,
        name: user.name,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    });
  };

  createUser = async (email, password, name) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const createdUser = await this.UserService.createUser(
      email,
      password,
      name,
    );

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      id: createdUser.id,
      email: createdUser.email,
      password: createdUser.password,
      name: createdUser.name,
      role: createdUser.role,
      createdAt: createdUser.createdAt,
      updatedAt: createdUser.updatedAt,
    };
  };
}